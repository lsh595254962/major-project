<template>
  <div class="login">
    <div class="wrap">
      <h2>登录</h2>
      <el-form label-width="80px">
        <el-form-item label="帐号:">
          <el-input placeholder="请输入帐号" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input placeholder="请输入帐号密码" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="goSubmit">登录</el-button>
          <el-button type="primary" @click="goHome">返回首页</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {}
    }
  },
  methods: {
    goSubmit () {
      console.log('submit')
      this.$router.push({ path: '/register' })
    },
    goHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 565px;
  background: url("../assets/img/login-bg.jpg");
  padding-top: 88px;
  .wrap {
    width: 800px;
    padding: 0 45px 45px;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    border-radius: 30px;
    h2{
      text-align: center;
      line-height: 80px;
      font-size: 38px;
    }
    /deep/ .el-form-item__label {
      color: #fff;
    }
  }
}
</style>
