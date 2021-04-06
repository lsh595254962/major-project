<template>
  <div class="contest">
    <div class="container">
      <sidebar :pageName="pageName"></sidebar>
      <div class="right">
        <com-type ></com-type>
        <my-pagination :options="options"></my-pagination>
      </div>
    </div>
    <!-- <div class="show container">
      <div class="show-tit">风采展示</div>
      <div class="show-shipin">
        <div class="shipin-tit clearfix">
          <h3><i class="s-icon"></i>视频集萃</h3>
          <span class="more" @click="goImgList('视频集萃')">更多></span>
        </div>
        <div class="shipin-con">
          <img-list :listData="listData"></img-list>
        </div>
      </div>
      <div class="show-text clearfix">
        <div class="text-l">
          <div class="text-l-tit clearfix">
            <h3><i class="t-icon"></i>文字荟萃</h3>
            <span class="more">更多></span>
          </div>
          <div class="text-l-con">
            <ul>
              <li class="clearfix" v-for="(i, index) in 5" :key="index">
                <span
                  >这里是文章名称这里是文章名称这里是文章名称这里是文章名称这里是文章名称...这里是文章名称这里是文章名称这里是文章名称这里是文章名称这里是文章名称...</span
                >
                <span>2020-01-15</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="text-r">
          <div class="text-r-tit clearfix">
            <h3><i class="hot-icon"></i>热门作品排行</h3>
          </div>
          <ul>
            <li class="clearfix" v-for="(i, index) in 3" :key="index">
              <span class="index">{{ index + 1 }}</span>
              <span>这里是作品名称是作品名称这里是作品名称是作品名称...</span>
            </li>
          </ul>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { goActivityType, getActivityList } from '../http/api'
import ComType from '../components/ComType'
import MyPagination from '../components/Pagination'
import Sidebar from '../components/Sidebar'
export default {
  data () {
    return {
      options: {
        pageSize: 2,
        total: 0
      },
      listData: [
        {
          imgUrl: require('../assets/img/text-img.png'),
          title: '这里是视频名称视频名称这里是视频名称视频名称'
        },
        {
          imgUrl: require('../assets/img/text-img.png'),
          title: '这里是视频名称视频名称这里是视频名称视频名称'
        },
        {
          imgUrl: require('../assets/img/text-img.png'),
          title: '这里是视频名称视频名称这里是视频名称视频名称'
        },
        {
          imgUrl: require('../assets/img/text-img.png'),
          title: '这里是视频名称视频名称这里是视频名称视频名称'
        },
        {
          imgUrl: require('../assets/img/text-img.png'),
          title: '这里是视频名称视频名称这里是视频名称视频名称'
        }
      ],
      pageName: 'jingsai'
    }
  },
  mounted () {
    this._goActivityType()
  },
  methods: {
    goSubPage () {
      this.$router.push({ path: '/testSub' })
    },
    goImgList (query) {
      this.$router.push({ path: '/vList', query: { name: query } })
    },
    _goActivityType () {
      goActivityType().then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    },
    // 获取活动列表
    _getActivityList (query) {
      getActivityList(query).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
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
@import "../assets/css/base.scss";
.contest {
  .container{
    display: flex;
    .right{
      flex: 1;
    }
  }
}
.show {
  height: 620px;
  background: #f7f7f7;
  margin-top: 20px;
  .show-tit {
    height: 50px;
    line-height: 50px;
    background: url("../assets/img/con-bg.png") no-repeat;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
  }
  .show-shipin {
    margin-bottom: 20px;
    .shipin-tit {
      padding: 0 30px;
      height: 40px;
      line-height: 40px;
      h3 {
        width: 60%;
        float: left;
        color: #01549a;
      }
      .more {
        width: 10%;
        float: right;
        color: #f49e38;
        text-align: right;
      }
    }
    .shipin-con {
      padding: 0 20px;
    }
  }
  .show-text {
    padding: 0 20px;
    .text-l {
      width: 779px;
      height: 247px;
      float: left;
      margin-right: 20px;
      .text-l-tit {
        margin-bottom: 10px;
        h3 {
          font-size: 20px;
          color: #01549a;
        }
        .more {
          float: right;
          color: #f49e38;
        }
      }
      .text-l-con {
        width: 779px;
        height: 247px;
        background: #eaedef;
        padding: 0 30px;
        li {
          height: 50px;
          line-height: 50px;
          span {
            display: block;
            float: left;
            &:first-child {
              font-size: 16px;
              width: 600px;
              @include ellipsis;
              &:hover {
                color: $activeColor;
              }
            }
            &:last-child {
              font-size: 14;
              width: 100px;
              float: right;
              text-align: right;
            }
          }
        }
      }
    }
    .text-r {
      width: 360px;
      height: 285px;
      background: #eaedef;
      float: left;
      padding: 18px 29px;
      .text-r-tit {
        margin-bottom: 15px;
        h3 {
          position: relative;
          font-size: 20px;
          font-weight: bold;
          color: #01549a;
          float: none;
        }
      }
      li {
        width: 305px;
        height: 60px;
        line-height: 60px;
        background: #dce1e5;
        margin-bottom: 10px;
        position: relative;
        &:last-child {
          margin-bottom: 0;
        }
        span {
          display: block;
          &.index {
            width: 24px;
            height: 24px;
            line-height: 24px;
            background: #01549a;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 15px;
            text-align: center;
            color: #fff;
            font-weight: 700;
          }
          &:last-child {
            float: right;
            width: 80%;
            @include ellipsis;
            &:hover {
              color: $activeColor;
            }
          }
        }
      }
    }
  }
}
</style>
