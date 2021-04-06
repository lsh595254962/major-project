<template>
  <div class="affairs">
    <div class="container">
      <sidebar
        :sideList="sideList"
        :pageName="pageName"
        @handleSide="handleSide"
      ></sidebar>
      <div class="right">
        <com-type :dataList="dataList" :pageName="pageName"></com-type>
        <my-pagination :options="options" @nextPage="nextPage"></my-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import ComType from '../components/ComType'
import MyPagination from '../components/Pagination'
import Sidebar from '../components/Sidebar'
import { getActivityType, getActivityList } from '../http/api'
export default {
  data () {
    return {
      pageName: 'jingsai',
      form: {},
      pageIndex: 1,
      pageSize: 10,
      sideList: [],
      dataList: [],
      pageCount: 0,
      options: {
        pageSize: 10,
        total: 0
      }
    }
  },
  mounted () {
    this._getActivityType()
  },
  methods: {
    goSubPage () {},
    changeDes (a) {},
    async _getActivityType () {
      const res = await getActivityType()
      this.sideList = res
      this.sideName = this.sideList[0]
      const query = {
        keyword: this.sideName,
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }
      this._getActivityList(query)
    },
    _getActivityList (query) {
      getActivityList(query)
        .then((res) => {
          if (res.IsSuccess) {
            console.log(res)
            this.dataList = res.Data
            if (res.PageCount) {
              this.pageCount = res.PageCount
              this.options.total = res.PageCount * this.pageSize
            } else {
              this.options.total = this.pageCount * this.pageSize
            }
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    handleSide (item) {
      const query = {
        keyword: item,
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      }
      this._getActivityList(query)
    },
    // 分页
    nextPage (val) {
      const query = {
        keyword: this.sideName,
        pageIndex: val,
        pageSize: this.pageSize
      }
      this._getActivityList(query)
    }
  },

  components: {
    ComType,
    MyPagination,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
.affairs {
  .container {
    display: flex;
    .right {
      flex: 1;
    }
  }
}
</style>
