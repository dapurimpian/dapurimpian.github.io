<template>
  <div style="height:100vh !important" class="layout d-flex flex-column justify-content-center scene3 h-100">
    <div class="text-center app-icon">
      <img class="scene1 scene4" src="~/static/logo.png" width="94">
      <img class="overlay-logo scene2" src="~/static/logo.png" width="94">
    </div>
    <div class="text-loader scene5">
      <Loader :isColor="true" />
    </div>
  </div>
</template>

<script>
import animation from '../animations/page-loader'
export default {
  name: 'IndexPage',
  data () {
    return {

    }
  },
  mounted () {
    animation.initial()
    setTimeout(() => {
      const vm = this
      function cb () {
        vm.navigateTo('/home')
      }
      animation.out(cb)
    }, 3000)
  },
  methods: {
    navigateTo (url, keepHistory) {
      if (keepHistory) {
        this.$router.push(url)
      } else {
        this.$router.replace(url)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .overlay-logo {
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        z-index: 1;
    }
    .text-loader {
        position: absolute;
        bottom: 3.5rem;
        left:50%;
        transform:translateX(-50%);
    }
</style>
