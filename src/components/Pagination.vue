<template>
  <div class="pagination-con">
    <el-pagination
      class="my-pagination"
      @current-change="handleCurrentChange"
      :page-size="pageSize"
      :current-page.sync="pageIndex"
      :hide-on-single-page="true"
      layout="prev, pager, next"
      next-text="下一页"
      prev-text="上一页"
      :total="total"
      background
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageIndex: 1
    }
  },
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    pageSize () {
      return this.options.pageSize
    },
    total () {
      return this.options.total
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.pageIndex = val
      this.$emit('nextPage', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination-con {
  height: 95px;
  padding-top: 30px;
  background-color: #fff;
  /deep/ .my-pagination {
    text-align: right;
    color: #202020;
    padding-right: 35px;
    .el-pager li {
      border: 1px solid #515151;
      background-color: #fff;
      &:not(.disabled).active {
        background-color: #374567;
        color: #fff;
      }
    }
    .btn-prev,
    .btn-next {
      border: 1px solid #515151;
      background-color: #fff;
      padding: 0 8px;
    }
  }
}
</style>
