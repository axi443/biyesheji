import { get, post } from './base.js'
// test mock
export function homeList() {
  const url = '/api/home_list'
  const useRoot = false
  return get(url, useRoot)
}
// proxy example
export function reptile(data) {
  const url = '/dev-api/AnmialSlaughter/PublishEnterprise/GetEnterpriseList'
  const useRoot = false
  return post(url, data, useRoot)
}