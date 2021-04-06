<template>
  <div class="footer">
    <p>江苏联合职业技术学院<a :href="`${$baseURL}/admin`">后台管理</a></p>
    <p>Copyright © 2010-2019 网站备案号：苏ICP备20036809号-1</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  height: 92px;
  background: #36393f;
  padding-top: 29px;
  text-align: center;
  color: #fff;
  p{
    margin-bottom: 6px;
    a{
      text-decoration: underline;
      cursor: pointer;
      color: #fff;
      &:hover{
        color: blue;
      }
    }
  }
}
</style>
