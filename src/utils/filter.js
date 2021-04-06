import { baseURL } from './config'
const filters = {
  ellipsis: (str, len) => {
    if (!str) return ''
    if (str.length > 1) {
      return str.replace(/<[^>]*>/g, '').substring(0, len) + '...'
    } else {
      return str
    }
  },
  fileName: (val) => {
    if (!val) return
    return val.split('#')[0]
  },
  filePath: (val) => {
    if (!val) return
    return baseURL + val.split('#')[1]
  }
}
export default filters
