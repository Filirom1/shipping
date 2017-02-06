<template>
  <div class="repo-list">
    <ul>
      <li v-for="repo in repos">
        <router-link :to="{name: 'tag-list', params: repo}">{{repo.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'repo-list',
  props: ['repos']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
}
</style>
