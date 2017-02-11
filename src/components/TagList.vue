<template>
  <ul class="tag-list">
    <li v-for="image in images">
      <router-link :to="{name: 'image-detail', params: image}">{{image.tag}}</router-link>
    </li>
  </ul>
</template>

<script>
import ImageDetail from 'components/ImageDetail'

export default {
  name: 'tag-list',
  data () {
    return {
      images: []
    }
  },
  created () {
    this.fetchTags()
  },
  components: {
    'image-detail': ImageDetail
  },
  methods: {
    fetchTags () {
      var namespace = this.$route.params.namespace
      var name = this.$route.params.name
      this.$registry.listTags(namespace, name).then(tags => {
        this.images = tags.map(tag => { return { namespace, name, tag } })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
