<template>
  <div class="video-detail">
    <div class="v-wrap container">
      <Bread :breads="breads" />
      <video-player :options="videoOptions" />
    </div>
  </div>
</template>
<script>
import Bread from '../components/Bread'
import VideoPlayer from '../components/VideoPlayer'

export default {
  data () {
    return {
      breads: [
        { path: '/', name: '首页' },
        { name: '视频详情' }],
      videoOptions: {
        autoplay: 'muted', // 自动播放
        controls: true, // 用户可以与之交互的控件
        loop: true, // 视频一结束就重新开始
        muted: false,
        aspectRatio: '16:9', // 显示比率
        fullscreen: {
          options: { navigationUI: 'hide' }
        },
        sources: [
          // {
          //   src: require('../assets/demo.mp4'),
          //   type: 'video/mp4'
          // }
        ]
      }
    }
  },
  components: {
    Bread,
    VideoPlayer
  }
}
</script>

<style lang="scss" scoped>
.v-wrap{
  padding: 20px 0;
}
</style>
