import Cookies from 'js-cookie'

const TOKEN = 'Token-CT'

export function getToken() {
  return Cookies.get(TOKEN)
}

export function setToken(token) {
  return Cookies.set(TOKEN, token)
}

export function removeToken() {
  return Cookies.remove(TOKEN)
}

export function setCookie(key, value, days) {
  return Cookies.set(key, value, { expires: days })
}
export function getCookie(key) {
  return Cookies.get(key)
}
export function removeCookie(key) {
  return Cookies.remove(key)
}
