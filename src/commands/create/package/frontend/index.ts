import {Args, Command} from '@oclif/core'
import {execSync} from 'node:child_process'
import {existsSync, mkdirSync} from 'node:fs'

import {PACKAGES_FOLDER} from '../../../../config.js'

export default class Frontend extends Command {
  static args = {
    packageName: Args.string({description: 'The name of the package to create', required: true}),
  }

  static description = 'Create a frontend package'

  static examples = []

  static flags = {}

  async run(): Promise<void> {
    const {args} = await this.parse(Frontend)

    if (!existsSync(PACKAGES_FOLDER)) {
      mkdirSync(PACKAGES_FOLDER, {recursive: true})
    }

    execSync(
      `npx create-next-app@latest ${PACKAGES_FOLDER}/${args.packageName} --ts --tailwind --eslint --app --src-dir --no-import-alias --use-pnpm`,
      {
        stdio: 'inherit',
      },
    )
  }
}
