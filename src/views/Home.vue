<template>
  <div class="home">
    <!-- banner -->
    <div class="banner">
      <div class="container">
        <el-carousel height="400px">
          <el-carousel-item v-for="item in bannerList" :key="item">
            <img :src="item" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="sceond container clearfix">
      <div class="notice">
        <div class="title clearfix">
          <h3><i class="pai-y-icon"></i>通知公告</h3>
          <span class="more" @click="goList('通知公告')">更多></span>
        </div>
        <div class="notice-con">
          <ul>
            <li
              class="n-item"
              v-for="(item, index) in noticeList"
              @click="goDetail(item, noticeCode)"
              :key="index"
            >
              <notice-item :item="item"></notice-item>
            </li>
          </ul>
        </div>
      </div>
      <div class="sceond-r">
        <div class="r-title title clearfix">
          <h3><i class="pai-y-icon"></i>动态新闻</h3>
          <span class="more" @click="goList('动态新闻')">更多></span>
        </div>
        <!-- newsList -->
        <div
          class="r-item clearfix"
          v-for="(item, index) in newsList"
          @click="goDetail(item, newCode)"
          :key="index"
        >
          <div class="r-left">
            <span>{{ $moment(item.publishdate).format("MM-DD") }}</span>
            <span>{{ $moment(item.publishdate).format("YYYY") }}</span>
          </div>
          <div class="r-right">
            <h4>{{ item.title }}</h4>
            <p class="introduction" ref="intr">{{ item.abs | ellipsis(40) }}</p>
            <p>
              <span>{{ item.author }}</span>
              <span>学科门类:{{ item.unit }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="achievements container">
      <h3><i class="pai-y-icon"></i>成果展示</h3>
      <ul>
        <li>
          <img src="../assets/img/text-img.png" alt="" />
          <p>成果名称成果名称成果成果名称成果名称成果...</p>
        </li>
        <li>
          <img src="../assets/img/text-img.png" alt="" />
          <p>成果名称成果名称成果成果名称成果名称成果...</p>
        </li>
        <li>
          <img src="../assets/img/text-img.png" alt="" />
          <p>成果名称成果名称成果成果名称成果名称成果...</p>
        </li>
        <li>
          <img src="../assets/img/text-img.png" alt="" />
          <p>成果名称成果名称成果成果名称成果名称成果...</p>
        </li>
        <li>
          <img src="../assets/img/text-img.png" alt="" />
          <p>成果名称成果名称成果成果名称成果名称成果...</p>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import NoticeItem from '../components/NoticeItem'
import { getPortalData } from '../http/api'
export default {
  name: 'Home',
  data () {
    return {
      newsList: [],
      noticeList: [],
      newCode: '',
      noticeCode: '',
      bannerList: [
        require('../assets/img/banner1.jpg'),
        require('../assets/img/banner2.jpg')
      ]
    }
  },
  mounted () {
    this.getNotice('通知公告')
    this.getNews('动态新闻')
  },
  methods: {
    goList (query) {
      this.$router.push({ path: '/list', query: { name: query } })
    },
    getNotice (query) {
      getPortalData(query)
        .then((res) => {
          this.noticeCode = res.ItemCode
          this.noticeList = res.Data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getNews (query) {
      getPortalData(query)
        .then((res) => {
          this.newCode = res.ItemCode
          this.newsList = res.Data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    goDetail (item, code) {
      console.log(item)
      this.$router.push({
        path: '/comDetail',
        query: { id: item.id, code: code }
      })
    }
  },
  components: {
    NoticeItem
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/css/base.scss";
.home {
  margin: 20px 0;
  .banner {
    padding-bottom: 20px;
    border-bottom: 5px solid #99bbd7;
    text-align: center;
    img {
      width: 1200px;
      height: 400px;
    }
  }
  .sceond {
    padding: 20px 0;
    .title {
      color: #f49e38;
      background-color: #fff;
      line-height: 80px;
      padding: 0 20px;
      .more {
        width: 30%;
        display: block;
        font-size: 18px;
        text-align: right;
        float: right;
      }
    }
    .notice {
      width: 644px;
      float: left;
      background-color: #01549a;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      .notice-con {
        padding: 0 20px;
        font-size: 16px;
        color: #ffffff;
        .n-item {
          border-bottom: 1px solid #6798c2;
          margin: 15px 0;
        }
      }
    }
    .sceond-r {
      width: 535px;
      float: right;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      .r-item {
        height: 120px;
        margin-bottom: 18px;
        &:last-child {
          margin-bottom: 0;
        }
        .r-left {
          float: left;
          width: 120px;
          height: 100%;
          background-color: $activeColor;
          padding: 30px 30px 0 0;
          span {
            display: block;
            color: #ffffff;
            text-align: right;
            &:first-child {
              font-size: 22px;
              margin-bottom: 10px;
            }
            &:last-child {
              font-size: 16px;
            }
          }
        }
        .r-right {
          float: right;
          width: 415px;
          height: 100%;
          padding: 0 20px 0 20px;
          background-color: #f7f7f7;
          h4 {
            font-size: 18px;
            cursor: pointer;
            &:hover {
              color: $activeColor;
            }
          }
          .introduction {
            border-bottom: 1px solid #ccc;
            margin: 10px 0;
            padding: 5px 0;
          }
          span {
            margin-right: 20px;
          }
        }
      }
    }
  }
  .achievements {
    height: 250px;
    padding: 20px;
    background-color: #f7f7f7;
    display: none;
    h3 {
      width: 100%;
      margin-bottom: 20px;
    }
    ul {
      li {
        float: left;
        width: 222px;
        height: 170px;
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
        img {
          width: 100%;
          height: 142px;
          display: block;
        }
        p {
          @include ellipsis;
          font-size: 16px;
          font-weight: bold;
          color: #222527;
          text-align: center;
          line-height: 30px;
          &:hover {
            color: $activeColor;
          }
        }
      }
    }
  }
}
</style>
