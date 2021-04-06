<template>
  <div class="register">
    <div class="wrap">
      <h2>注册</h2>
      <el-form label-width="80px">
        <el-form-item label="帐号:">
          <el-input placeholder="请输入帐号" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input placeholder="请输入帐号密码" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="goSubmit">立即注册</el-button>
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
    goSubmit () {},
    goHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
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
      font-size: 38px;
      line-height: 80px;
      text-align: center;
    }
    /deep/ .el-form-item__label {
      color: #fff;
    }
  }
}
</style>
