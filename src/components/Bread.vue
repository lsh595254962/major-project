<template>
  <div class="route">
    <span class="route-icon"></span>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="(item, index) in breads"
        :key="index"
        :to="{ path: item.path }"
      >
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    breads: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.route{
  position: relative;
  padding-left: 35px;
  .route-icon{
    position: absolute;
    background: url('../assets/img/route-icon.png') no-repeat;
    background-size: cover;
    width: 26px;
    height: 26px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
}
.el-breadcrumb {
  height: 80px;
  line-height: 80px;
  font-size: 20px;
  font-weight: bold !important;
  color: #000 !important;
}
</style>
