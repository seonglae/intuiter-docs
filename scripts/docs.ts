import path from 'path'
import { run } from './run'

const build = async () => run('npx vitepress build', path.resolve(__dirname, '../'))

build().catch(e => {
  console.error(e)
  process.exit(1)
})
