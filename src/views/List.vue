<template>
  <div class="list container">
    <Bread :breads="breads" />
    <div class="list-con">
      <ul>
        <li v-for="(item, index) in dataList" :key="index">
          <com-item :item="item" @goDetail="goDetail"></com-item>
        </li>
      </ul>
    </div>
    <my-pagination :options="options" @nextPage="nextPage"></my-pagination>
  </div>
</template>

<script>
import ComItem from '../components/ComItem'
import Bread from '../components/Bread'
import MyPagination from '../components/Pagination'
import { getSearchFirstPageData, getSearchNextPageData } from '../http/api'
export default {
  data () {
    return {
      breads: [{ path: '/', name: '首页' }],
      pageName: '',
      pageIndex: 1,
      pageSize: 0,
      options: {},
      dataList: [],
      code: ''
    }
  },
  mounted () {
    this.pageName = this.$route.query.name
    this.breads.push({ name: this.pageName })
    this._getSearchFirstPageData(this.pageName)
  },
  methods: {
    _getSearchFirstPageData (name) {
      getSearchFirstPageData(name)
        .then((res) => {
          this.total = res.TotalCount
          this.pageSize = res.PageSize
          this.dataList = res.Data
          this.code = res.ItemCode
          this.options = {
            total: this.total,
            pageSize: res.PageSize
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    nextPage (val) {
      const query = {
        code: this.code,
        pageIndex: val,
        pageSize: this.pageSize
      }
      getSearchNextPageData(this.pageName, query)
        .then((res) => {
          if (res.IsSuccess) {
            this.dataList = res.Data
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    goDetail (item) {
      const { href } = this.$router.resolve({
        path: '/comDetail',
        query: { id: item.id, code: this.code }
      })
      window.open(href, '_blank')
    }
  },
  components: {
    ComItem,
    Bread,
    MyPagination
  }
}
</script>

<style lang="scss" scoped>
.list {
  margin-bottom: 20px;
  .list-con {
    padding: 0 30px 10px;
    background: #f7f7f7;
    li {
      padding-top: 5px;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
