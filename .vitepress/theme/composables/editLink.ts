import { computed } from 'vue-demi'
import { useData } from 'vitepress'
import { endingSlashRE, isNullish, isExternal, extRE } from '../utils'

export function useEditLink() {
  const { site, page } = useData()

  const url = computed(() => {
    const showEditLink = isNullish(page.value?.frontmatter?.editLink)
      ? site.value.themeConfig.editLinks
      : page.value?.frontmatter?.editLink

    const { repo, docsDir = '', docsBranch = 'main', docsRepo = repo } = site.value.themeConfig

    const relativePath = page.value?.relativePath

    if (!showEditLink || !relativePath || !repo) return null

    return createUrl(repo, docsRepo, docsDir, docsBranch, relativePath)
  })

  const text = computed(() => site.value.themeConfig.editLinkText || 'Edit this page')

  return { url, text }
}

function createUrl(repo: string, docsRepo: string, docsDir: string, docsBranch: string, path: string): string {
  const base = isExternal(docsRepo) ? docsRepo : `https://pr.new/${docsRepo}`
  return (
    `${base.replace(endingSlashRE, '')}/edit` +
    `/${docsBranch}/${docsDir ? `${docsDir.replace(endingSlashRE, '')}/` : ''}${path}?initialPath=${encodeURIComponent(path.replace(extRE, '.html'))}`
  )
}
