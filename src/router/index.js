import Vue from 'vue'
import Router from 'vue-router'
import NamespaceList from 'components/NamespaceList'
import TagList from 'components/TagList'
import ImageDetail from 'components/ImageDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: NamespaceList
    }, {
      name: 'tag-list',
      path: '/:namespace/:name',
      components: {
        default: NamespaceList,
        tags: TagList
      }
    }, {
      name: 'image-detail',
      path: '/:namespace/:name/:tag',
      components: {
        default: NamespaceList,
        tags: TagList,
        image: ImageDetail
      }
    }
  ]
})
