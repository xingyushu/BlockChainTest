import defaultSettings from '@/settings'

const title = defaultSettings.title || '区块链测试系统  '

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
