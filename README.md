oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g donq
$ donq COMMAND
running command...
$ donq (--version)
donq/0.0.0 darwin-arm64 node-v20.11.1
$ donq --help [COMMAND]
USAGE
  $ donq COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`donq hello PERSON`](#donq-hello-person)
* [`donq hello world`](#donq-hello-world)
* [`donq help [COMMAND]`](#donq-help-command)
* [`donq plugins`](#donq-plugins)
* [`donq plugins add PLUGIN`](#donq-plugins-add-plugin)
* [`donq plugins:inspect PLUGIN...`](#donq-pluginsinspect-plugin)
* [`donq plugins install PLUGIN`](#donq-plugins-install-plugin)
* [`donq plugins link PATH`](#donq-plugins-link-path)
* [`donq plugins remove [PLUGIN]`](#donq-plugins-remove-plugin)
* [`donq plugins reset`](#donq-plugins-reset)
* [`donq plugins uninstall [PLUGIN]`](#donq-plugins-uninstall-plugin)
* [`donq plugins unlink [PLUGIN]`](#donq-plugins-unlink-plugin)
* [`donq plugins update`](#donq-plugins-update)

## `donq hello PERSON`

Say hello

```
USAGE
  $ donq hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/npm-package/donq/blob/v0.0.0/src/commands/hello/index.ts)_

## `donq hello world`

Say hello world

```
USAGE
  $ donq hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ donq hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/npm-package/donq/blob/v0.0.0/src/commands/hello/world.ts)_

## `donq help [COMMAND]`

Display help for donq.

```
USAGE
  $ donq help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for donq.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.21/src/commands/help.ts)_

## `donq plugins`

List installed plugins.

```
USAGE
  $ donq plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ donq plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.14/src/commands/plugins/index.ts)_

## `donq plugins add PLUGIN`

Installs a plugin into donq.

```
USAGE
  $ donq plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into donq.

  Uses bundled npm executable to install plugins into /Users/mrbash/.local/share/donq

  Installation of a user-installed plugin will override a core plugin.

  Use the DONQ_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the DONQ_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ donq plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ donq plugins add myplugin

  Install a plugin from a github url.

    $ donq plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ donq plugins add someuser/someplugin
```

## `donq plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ donq plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ donq plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.14/src/commands/plugins/inspect.ts)_

## `donq plugins install PLUGIN`

Installs a plugin into donq.

```
USAGE
  $ donq plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into donq.

  Uses bundled npm executable to install plugins into /Users/mrbash/.local/share/donq

  Installation of a user-installed plugin will override a core plugin.

  Use the DONQ_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the DONQ_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ donq plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ donq plugins install myplugin

  Install a plugin from a github url.

    $ donq plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ donq plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.14/src/commands/plugins/install.ts)_

## `donq plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ donq plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ donq plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.14/src/commands/plugins/link.ts)_

## `donq plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ donq plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ donq plugins unlink
  $ donq plugins remove

EXAMPLES
  $ donq plugins remove myplugin
```

## `donq plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ donq plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.14/src/commands/plugins/reset.ts)_

## `donq plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ donq plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ donq plugins unlink
  $ donq plugins remove

EXAMPLES
  $ donq plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.14/src/commands/plugins/uninstall.ts)_

## `donq plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ donq plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ donq plugins unlink
  $ donq plugins remove

EXAMPLES
  $ donq plugins unlink myplugin
```

## `donq plugins update`

Update installed plugins.

```
USAGE
  $ donq plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.0.14/src/commands/plugins/update.ts)_
<!-- commandsstop -->
