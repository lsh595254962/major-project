<template>
  <div class="nav">
    <ul class="container">
      <li
        @click="handleTit(index, item.Url)"
        :style="{ width: 100 / titles.length + '%' }"
        v-for="(item, index) in titles"
        :class="{ cur: curTit == index }"
        :key="index"
      >
        {{ item.Name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getNavData } from '../http/api'
export default {
  data () {
    return {
      titles: [{ Name: '首页', Url: '/' }],
      curTit: 0
    }
  },
  mounted () {
    this.curTit = localStorage.getItem('curTit')
    this._getNavData()
  },
  methods: {
    handleTit (index, path) {
      localStorage.setItem('curTit', index)
      this.curTit = index
      if (path === '/' || path === '/affairs' || path === '/contest') {
        this.$router.push({ path: path })
      } else {
        window.open(path)
      }
    },
    _getNavData () {
      getNavData().then((res) => {
        res.forEach(item => {
          this.titles.push(item)
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  height: 50px;
  line-height: 50px;
  background: #063486;
  li {
    float: left;
    min-width: 140px;
    color: #fff;
    text-align: center;
    user-select: none;
    &.cur {
      background-color: #04246c;
    }
  }
}
</style>
