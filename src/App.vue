<template>
  <div id="app">
    <my-header v-show="!pdfFlag"></my-header>
    <my-nav v-show="navFlag && !pdfFlag"></my-nav>
    <keep-alive>
      <router-view v-if="$route.meta.isAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.isAlive"></router-view>
    <my-footer v-show="!pdfFlag"></my-footer>
  </div>
</template>
<script>
import MyHeader from './components/Header'
import MyFooter from './components/Footer'
import MyNav from './components/Nav'
export default {
  name: 'Home',
  data () {
    return {
      navFlag: true,
      pdfFlag: false
    }
  },
  watch: {
    $route (newValue, oldValue) {
      const name = newValue.name
      if (name === 'Login' || name === 'Register') {
        this.navFlag = false
      } else {
        this.navFlag = true
      }
      this.pdfFlag = name === 'Pdf'
    }
  },
  mounted () {
  },
  components: {
    MyHeader,
    MyNav,
    MyFooter
  }
}
</script>
<style lang="scss"></style>
