<template>
  <div class="header">
    <div class="header-t">
      <div class="container">
        <div class="header-t-l" v-html="time"></div>
        <div class="header-t-r">
          <!-- <el-button type="primary" @click="goRegister">注册</el-button> -->
        </div>
      </div>
    </div>
    <div class="header-b">
      <img src="../assets/img/logo.png" alt="logo">
    </div>
  </div>
</template>

<script>
import { getDate } from '../utils'
export default {
  data () {
    return {
      time: getDate()
    }
  },
  mounted () {},
  methods: {
    goLogin () {
      this.$router.push({ path: '/login' })
    }
    // goRegister () {
    //   this.$router.push({ path: '/register' })
    // }
  }
}
</script>

<style lang="scss" scoped>
.header {
  .header-t {
    height: 80px;
    line-height: 80px;
    color: #ffffff;
    background: #01549a;
    .header-t-l {
      float: left;
    }
    .header-t-r {
      float: right;
      button {
        width: 70px;
        height: 40px;
        line-height: 40px;
        background: #063486;
        border-color: #063486;
        font-size: 18px;
        padding: 0;
      }
    }
  }
  .header-b {
    height: 107px;
    text-align: center;
    img{
      width: 255px;
      height: 145px;
      margin-top: -57px;
    }
  }
}
</style>
