import {DescribeTasksCommand, ECSClient, ListClustersCommand, ListTasksCommand} from '@aws-sdk/client-ecs'
import {fromIni} from '@aws-sdk/credential-providers'
import {Command, Flags} from '@oclif/core'
import inquirer from 'inquirer'
import {execSync} from 'node:child_process'

export default class Project extends Command {
  static args = {}

  static description = 'Exec command inside ECS container'

  static examples = []

  static flags = {
    command: Flags.string({
      aliases: ['command'],
      char: 'c',
      default: '/bin/sh',
      description: 'Command to execute',
    }),
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(Project)
    const {command} = flags

    const profileQuestion = await inquirer.prompt({
      default: 'default',
      message: 'AWS profile',
      name: 'profile',
      type: 'input',
    })
    const {profile} = profileQuestion

    const regionQuestion = await inquirer.prompt({
      default: 'eu-south-1',
      message: 'AWS profile',
      name: 'region',
      type: 'input',
    })
    const {region} = regionQuestion

    const ecsClient = new ECSClient({
      credentials: fromIni({
        clientConfig: {region},
        profile,
      }),
    })

    const listClustersCommand = new ListClustersCommand()
    const listClustersResponse = await ecsClient.send(listClustersCommand)

    if (listClustersResponse.$metadata.httpStatusCode !== 200 || listClustersResponse.clusterArns?.length === 0) {
      this.log('No ECS clusters found')
      this.exit()
    }

    const clusterQuestion = await inquirer.prompt({
      choices: listClustersResponse.clusterArns?.map((cluster) => cluster.split('/')[1]),
      message: 'ECS cluster',
      name: 'cluster',
      type: 'list',
    })
    const {cluster} = clusterQuestion

    const listTasksCommand = new ListTasksCommand({
      cluster,
      desiredStatus: 'RUNNING',
    })
    const listTasksResponse = await ecsClient.send(listTasksCommand)

    if (
      listTasksResponse.$metadata.httpStatusCode !== 200 ||
      !listTasksResponse.taskArns ||
      listTasksResponse.taskArns?.length === 0
    ) {
      this.log('No ECS tasks found')
      this.exit()
    }

    const task = listTasksResponse.taskArns[0]

    const describeTasksCommand = new DescribeTasksCommand({
      cluster,
      tasks: [task],
    })

    const describeTasksCommandResponse = await ecsClient.send(describeTasksCommand)

    if (!describeTasksCommandResponse.tasks || !describeTasksCommandResponse.tasks[0].containers) {
      this.exit()
    }

    const containerQuestion = await inquirer.prompt({
      choices: describeTasksCommandResponse.tasks[0].containers.map((container) => container.name || ''),
      message: 'ECS container',
      name: 'container',
      type: 'list',
    })

    const {container} = containerQuestion

    execSync(
      `aws ecs execute-command \
      --profile ${profile} \
      --region ${region} \
      --cluster ${cluster} \
      --task ${task} \
      --container ${container} \
      --interactive \
      --command "${command}"`,
      {stdio: 'inherit'},
    )
  }
}
