import request from '@/utils/request'

export default {
  getImg(type: string) {
    return request({
      url: '/img-preview',
      method: 'get',
      params: { type }
    })
  }
}
