import {Args, Command as BaseCommand} from '@oclif/core'
import {execSync} from 'node:child_process'
import {existsSync, mkdirSync} from 'node:fs'

import {PACKAGES_FOLDER} from '../../../config.js'

export default class Command extends BaseCommand {
  static args = {
    packageName: Args.string({description: 'The name of the package to create', required: true}),
  }

  static description = 'Create a backend package'

  static examples = []

  static flags = {}

  async run(): Promise<void> {
    const {args} = await this.parse(Command)

    if (!existsSync(PACKAGES_FOLDER)) {
      mkdirSync(PACKAGES_FOLDER, {recursive: true})
    }

    execSync(`npx -y create-keystone-app@latest ${PACKAGES_FOLDER}/${args.packageName}`, {
      stdio: 'inherit',
    })
  }
}
