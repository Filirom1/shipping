import Vue from 'vue'
import _ from 'underscore'

export function listRepositories () {
  return Vue.http.get('v2/_catalog')
    .then(resp => {
      var repos = []
      resp.body.repositories.forEach(repo => {
        var namespace, name
        [namespace, name] = repo.split('/')
        repos.push({
          namespace,
          name
        })
      })
      return Promise.resolve(repos)
    })
    .catch(err => Promise.reject(err))
}

export function listTags (namespace, name) {
  return Vue.http.get(`v2/${namespace}/${name}/tags/list`)
    .then(resp => {
      var tags = resp.body.tags
      return Promise.resolve(tags)
    })
    .catch(err => Promise.reject(err))
}

export function imageDetails (namespace, name, tag) {
  return Vue.http.get(`v2/${namespace}/${name}/manifests/${tag}`, { headers: {
    'Accept': 'application/vnd.docker.distribution.manifest.v2+json'
  }})
    .then(resp => {
      var size = _.pluck(resp.body.layers, 'size').reduce((a, b) => {
        return a + b
      }, 0)
      var id = resp.body.config.digest.replace(/.*:/, '')
      var digest = resp.headers.map['docker-content-digest'][0]
      return Promise.resolve({size, id, digest})
    })
    .catch(err => Promise.reject(err))
}
