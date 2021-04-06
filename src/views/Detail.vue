<template>
  <div class="detail">
    <div class="container">
      <Bread :breads="breads"></Bread>
      <div class="content">
        <h2 v-html="detailCon.Title"></h2>
        <div class="text" v-html="detailCon.Content"></div>
        <div class="fujian" v-if="detailCon.Attach ">
          <span>附件下载 : </span>
          <a :href="`${$baseURL}/api/ApiMeeting/DownloadMeetingFile?meetingId=${id}&fileName=${fileName}&index=0`" download target="_blank">
            {{detailCon.Attach|fileName}}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bread from '../components/Bread'
import { getMeetingDetail } from '../http/api'
export default {
  data () {
    return {
      breads: [
        { path: '/', name: '首页' },
        { path: '/', name: '详情' }
      ],
      detailCon: {},
      fileName: '',
      id: ''
    }
  },
  mounted () {
    this.id = this.$route.query.id
    this._getMeetingDetail(this.id)
  },
  methods: {
    _getMeetingDetail (id) {
      const query = {
        meetingId: id
      }
      getMeetingDetail(query)
        .then((res) => {
          console.log(res)
          if (res.IsSuccess) {
            this.detailCon = res.Data
            this.fileName = this.detailCon.Attach.split('#')[0]
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
    // _getDownloadMeetingFile () {
    //   const query = {
    //     meetingId: this.id,
    //     fileName: this.fileName,
    //     index: 0
    //   }
    //   getDownloadMeetingFile(query).then((res) => {
    //     window.open(res)
    //   }).catch((err) => {
    //     console.log(err)
    //   })
    // }
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
