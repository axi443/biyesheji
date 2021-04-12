const StorageKey = 'Not_Change_Data'

export function getStorage(key) {
  var data = localStorage.getItem(key)
  if (data) {
    return JSON.parse(data)
  } else {
    return null
  }
}
export function setStorage(key, data) {
  if (typeof data === 'object') {
    data = JSON.stringify(data)
  }
  localStorage.removeItem(key)
  localStorage.setItem(key, data)
}
export function removeStorage(key) {
  localStorage.removeItem(key)
}
export function clear() {
  localStorage.clear()
}

export function getOrgTree() {
  var tree = localStorage.getItem(StorageKey)
  if (tree) {
    return JSON.parse(tree)
  } else {
    return null
  }
}
export function setOrgTree(tree) {
  if (typeof tree === 'object') {
    tree = JSON.stringify(tree)
  }
  localStorage.removeItem(StorageKey)
  localStorage.setItem(StorageKey, tree)
}
export function removeOrgTree() {
  localStorage.removeItem(StorageKey)
}