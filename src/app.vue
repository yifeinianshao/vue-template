<style lang="stylus" scoped>
#app
  display: flex
  flex-direction: column
  justify-content: space-between
  height: 100vh
  .top,
  .bottom
    flex-shrink: 0
  .container
    display: flex
    justify-content: center
    &.header,
    &.footer
      padding: 18px
      background: #f3f3f3
    .content
      width: 900px
</style>

<template lang="pug">
#app
  .top
    .container.header
      header-component.content
    .container
      router-view.content
  .bottom
    .container.footer
      footer-component.content
</template>

<script>
import headerComponent from 'src/pages/header'
import footerComponent from 'src/pages/footer'
export default {
  components: {
    headerComponent,
    footerComponent
  }
}
</script>
