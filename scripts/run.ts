import execa from 'execa'
import { withBase } from 'vitepress'

export function run(command: string, cwd?: string) {
  execa.commandSync(command, { stdio: 'inherit', cwd })
}

export function runArgs(command: string, args: string[], cwd?: string) {
  execa.sync(command, args, { stdio: 'inherit', cwd })
}

export function useUrl() {
  return { withBase }
}
