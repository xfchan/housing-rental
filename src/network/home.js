import {
  request
} from './request'

export function getHomeMultiData() {
  return request({
    url: '/'
  })
}

export function getHomeHouses(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
