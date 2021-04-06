<template>
  <div class="v-list container">
    <Bread :breads="breads" />
    <img-list :listData="listData"></img-list>
  </div>
</template>

<script>
import ImgList from '../components/ImgList'
import Bread from '../components/Bread'
export default {
  data () {
    return {
      breads: [{ path: '/', name: '首页' }],
      listData: [
        { imgUrl: require('../assets/img/text-img.png'), title: '这里是视频名称视频名称这里是视频名称视频名称' },
        { imgUrl: require('../assets/img/text-img.png'), title: '这里是视频名称视频名称这里是视频名称视频名称' },
        { imgUrl: require('../assets/img/text-img.png'), title: '这里是视频名称视频名称这里是视频名称视频名称' },
        { imgUrl: require('../assets/img/text-img.png'), title: '这里是视频名称视频名称这里是视频名称视频名称' },
        { imgUrl: require('../assets/img/text-img.png'), title: '这里是视频名称视频名称这里是视频名称视频名称' }
      ]
    }
  },
  mounted () {
    this.breads.push({ name: this.$route.query.name })
  },
  components: {
    ImgList,
    Bread
  }
}
</script>

<style lang="scss" scoped>
.v-list{
  margin: 20px auto;
}
</style>
