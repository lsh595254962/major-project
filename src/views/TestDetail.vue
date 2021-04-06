<template>
  <div class="text-detail container">
    <Bread :breads="breads" />
    <div class="content">
      <div class="prize">
        <h4>奖品描述 :</h4>
        <p v-for="item in prizeList" :key="item.Id">
          <span>{{ item.Name }}:</span>
          <span>分数{{ item.MixSocre }}-</span>
          <span>{{ item.MaxSocre }}</span>
          <span>奖品：{{ item.Description }}</span>
        </p>
      </div>
      <div class="name-list">
        <h4>人员名单 :</h4>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="UserName" label="姓名"> </el-table-column>
          <el-table-column prop="Score" label="分数"> </el-table-column>
          <el-table-column prop="SchoolName" label="学校"> </el-table-column>
          <el-table-column label="作品名称">
            <template slot-scope="scope">
              <a
                :href="`${$baseURL}/api/ApiActivity/DownloadActivityFile?personId=${id}&fileName=${getName(scope.row)}&index=0`"
                download
                target="_blank"
              >
                {{ scope.row.Attach | fileName }}
              </a>
            </template>
          </el-table-column>
        </el-table>
        <my-pagination
          :options="options"
          @nextPage="_getActivityAttended"
        ></my-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Bread from '../components/Bread'
import MyPagination from '../components/Pagination'
import { getActivityPrize, getActivityAttended } from '../http/api'
export default {
  data () {
    return {
      breads: [
        { path: '/', name: '首页' },
        { path: '', name: '竞赛详情' }
      ],
      id: '',
      pageIndex: 1,
      pageSize: 8,
      prizeList: [],
      options: {},
      tableData: [],
      pageCount: 0
    }
  },
  mounted () {
    this.id = this.$route.query.id
    this._getActivityPrize()
    this._getActivityAttended()
    console.log(this.$baseURL)
  },
  methods: {
    _getActivityPrize () {
      const query = {
        activityId: this.id
      }
      getActivityPrize(query)
        .then((res) => {
          if (res.IsSuccess) {
            this.prizeList = res.Data
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    _getActivityAttended (val) {
      const query = {
        activityId: this.id,
        pageSize: this.pageSize
      }
      query.pageIndex = val || this.pageIndex
      getActivityAttended(query)
        .then((res) => {
          if (res.IsSuccess) {
            this.tableData = res.Data
            this.options = {
              pageSize: this.pageSize
            }
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
    getName (row) {
      if (row.Attach) {
        return row.Attach.split('#')[0]
      }
    }
  },
  components: {
    Bread,
    MyPagination
  }
}
</script>

<style lang="scss" scoped>
.text-detail {
  .content {
    padding: 20px;
    h4 {
      font-size: 18px;
    }
    .prize {
      margin-bottom: 20px;
      overflow: hidden;
      border-bottom: 1px dotted #000;
      p {
        width: 33.33%;
        line-height: 35px;
        float: left;
        span {
          margin-right: 15px;
          &:nth-child(2) {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
