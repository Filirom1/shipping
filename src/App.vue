<template>
  <div id="app">
    <div class="col">
      <router-view></router-view>
    </div>
    <div class="col">
      <router-view name="tags"></router-view>
    </div>
    <div class="col">
      <router-view name="image"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
@import 'src/assets/scss/design.scss';
</style>

<style scoped>
  .col {
    display: inline-block;
    vertical-align: top;
  }
</style>
