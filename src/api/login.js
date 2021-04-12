import { get, post } from './base.js'

export function login(data) {
  const url = "/auth/login";
  return post(url, data);
}

export function logout(data) {
  const url = "/auth/logout";
  return post(url);
}

export function userInfo() {
  const url = '/auth/info'
  return get(url)
}