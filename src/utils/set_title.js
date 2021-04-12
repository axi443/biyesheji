import { title } from '@/settings'

export function setPageTitle(pageTitle) {
  if (pageTitle) {
    document.title = `${pageTitle} - ${title}`
    
  } else {
    document.title = `${title}`
  }
}