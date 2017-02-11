<template>
  <ul class="tag-detail">
    <pre>
    docker pull {{namespace}}/{{name}}:{{tag}}
    docker pull {{namespace}}/{{name}}@{{image.digest}}
    </pre>
    Size: {{size}}
    Id: {{image.id}}
  </ul>
</template>

<script>
import humanize from 'humanize'

export default {
  name: 'tag-detail',
  data () {
    return {
      image: {},
      size: 0,
      namespace: this.$route.params.namespace,
      name: this.$route.params.name,
      tag: this.$route.params.tag
    }
  },
  created () {
    this.fetchDetails()
  },
  methods: {
    fetchDetails () {
      var namespace = this.$route.params.namespace
      var name = this.$route.params.name
      var tag = this.$route.params.tag
      this.$registry.imageDetails(namespace, name, tag).then(image => {
        this.image = image
        this.size = humanize.filesize(image.size)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
