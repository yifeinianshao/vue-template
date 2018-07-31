<style lang="stylus" scoped>
@import "~styl/variable";
.header
  display: flex
  align-items: center
  justify-content: space-between
  .logo
    font-size: 20px
  .menu
    display: flex
    align-items: center
    .item
      padding-right: 30px
      &:last-child
        padding-right: 0
      .title
        color: $font-color
        transition: color .2s
        &:hover,
        &.active
          color: $active-color
        span
          margin-left: 10px
</style>

<template lang="pug">
.header
  router-link.logo(:to="{ name: MENUS[0].routeName }")
    img(src="~img/logo.png", width="200")
  .menu
    .item(v-for="menu, index in MENUS", :key="index", v-if="menu.isMenu")
      router-link.title(:class="{ 'active': menu.routeName === $route.name }", :to="{ name: menu.routeName }")
        font-awesome-icon(:icon="['fas', menu.icon]")
        span(@click="increment") {{ menu.title }}-{{ shop }}
</template>

<script>
import MENUS from 'src/enums/MENUS'
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      MENUS
    }
  },
  computed: mapState({
    shop: state => state.shop.count
  }),
  methods: {
    ...mapMutations('shop', [
      'increment'
    ])
  }
}
</script>
