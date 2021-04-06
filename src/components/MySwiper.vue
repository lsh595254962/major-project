<template>
  <swiper
    :slides-per-view="3"
    :space-between="50"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper'
import 'swiper/swiper-bundle.css'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.my-swiper {
  height: 300px;
  /deep/.swiper-wrapper {
    height: 300px;
  }
}
</style>
