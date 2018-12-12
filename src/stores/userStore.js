import { header } from '../config/index.js'

const state = {
}

const getters = {
}

const mutations = {
}

const actions = {
  // getAuthToken ({ commit }, payload) {
  //   const that = payload[0]
  //   const data = payload[1]
  //
  //   Object.assign(data, client(), { grant_type: 'password', scope: '' })
  //   return new Promise((resolve, reject) => {
  //     that.$http.post(that.$api({
  //       target: 'oauth/token',
  //       secure: false
  //     }), data).then(response => {
  //       resolve(response)
  //     }).catch(err => {
  //       reject(err)
  //     })
  //   })
  // },
  setAuthToken ({ commit }, that) {
  },
  getAuthUser ({ commit }, that) {
    return new Promise((resolve, reject) => {
      that.$http.get(that.$api({
        target: 'user'
      }), {
        headers: header()
      }).then(response => {
        resolve(response)
      }).catch(err => {
        reject(err)
      })
    })
  },
  setAuthUser ({ commit }, that) {
  }

}

export default {
  state, getters, mutations, actions
}
