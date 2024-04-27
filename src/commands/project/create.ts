import {Args, Command as BaseCommand} from '@oclif/core'
import Handlebars from 'handlebars'
import {existsSync, mkdirSync, readFileSync, writeFileSync} from 'node:fs'
import {dirname} from 'node:path'
import {fileURLToPath} from 'node:url'

import {PACKAGES_FOLDER} from '../../config.js'
import {kebabCase} from '../../lib/utils.js'

export default class Command extends BaseCommand {
  static args = {
    clientName: Args.string({
      description: 'The name of the client of the project to create',
      required: true,
    }),
    projectName: Args.string({
      description: 'The name of the project to create',
      required: true,
    }),
  }

  static description = 'Create a project structure'

  static examples = []

  static flags = {}

  async run(): Promise<void> {
    const {args} = await this.parse(Command)
    const folder = `${kebabCase(args.clientName)}_${kebabCase(args.projectName)}`
    const currentPath = dirname(fileURLToPath(import.meta.url))
    const filesToProcess = ['pnpm-workspace.yaml.hbs', 'package.json.hbs', '.npmrc.hbs']

    if (!existsSync(folder)) {
      mkdirSync(folder, {recursive: true})
    }

    for (const filename of filesToProcess) {
      const hbsData = readFileSync(`${currentPath}/../../../templates/project/${filename}`).toString()
      const template = Handlebars.compile(hbsData)
      const fileData = template({
        packagesFolder: PACKAGES_FOLDER,
        projectName: `${kebabCase(args.clientName)}_${kebabCase(args.projectName)}`,
      })
      writeFileSync(`${folder}/${filename}`, fileData)
    }
  }
}
