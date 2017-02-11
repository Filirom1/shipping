<template>
  <nav class="namespace-list">
    <section v-for="repos, namespace in groupedRepos">
      <h1>{{namespace}}</h1>
      <repo-list :repos="repos"></repo-list>
    </section>
  </nav>
</template>

<script>
import _ from 'underscore'
import RepoList from 'components/RepoList'

export default {
  name: 'namespace-list',
  data () {
    return {
      groupedRepos: []
    }
  },
  components: {
    'repo-list': RepoList
  },
  created () {
    this.fetchRepo()
  },
  methods: {
    fetchRepo () {
      this.$registry.listRepositories().then(repos => {
        var groupedRepos = _.groupBy(repos, 'namespace')
        this.groupedRepos = groupedRepos
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
