<template>
  <div class="detail">
    <div class="container">
      <Bread :breads="breads"></Bread>
      <div class="content">
        <h2 v-html="detailCon.Title"></h2>
        <div class="text" v-html="detailCon.Text"></div>
        <div class="fujian" v-if="detailCon.Attach ">
          <span>附件下载 : </span>
          <a :href="detailCon.Attach|filePath" download target="_blank">
            {{detailCon.Attach|fileName}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bread from '../components/Bread'
import { getDetailData } from '../http/api'
export default {
  data () {
    return {
      breads: [
        { path: '/', name: '首页' },
        { path: '/', name: '详情' }
      ],
      detailCon: {}
    }
  },
  mounted () {
    this.id = this.$route.query.id
    this.code = this.$route.query.code
    this._getDetailData()
  },
  methods: {
    _getDetailData () {
      const query = {
        code: this.code,
        recordId: this.id
      }
      getDetailData(query)
        .then((res) => {
          console.log(res)
          this.detailCon = res.Data[0]
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  components: {
    Bread
  }
}
</script>

<style lang="scss" scoped>
.detail {
  .content {
    text-align: center;
    h2 {
      margin-bottom: 14px;
    }
    .text {
      line-height: 35px;
      font-size: 16px;
      img {
        max-width: 80%;
      }
    }
  }
  .fujian {
    font-size: 20px;
    text-align: left;
    margin-bottom: 20px;
    background-color: #ccc;
    padding: 20px;
    border-radius: 5px;
  }
}
</style>
