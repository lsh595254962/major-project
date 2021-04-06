<template>
  <div class="wrap">
    <ul class="clearfix">
      <li v-for="(item, index) in listData" :key="index">
        <img :src="item.imgUrl" alt="item.title" />
        <p @click="handleItem(item)">{{ item.title }}.</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted () {},
  props: {
    listData: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleItem (item) {
      const { href } = this.$router.resolve({
        path: '/vdetail'
      })
      window.open(href, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/base.scss";
.wrap {
  background-color: #d6d5d1;
  padding: 10px 0;
  user-select: none;
  ul {
    li {
      width: 20%;
      float: left;
      img {
        width: 210px;
        height: 155px;
        display: block;
        margin: 0 auto;
      }
      p {
        width: 100%;
        padding: 0 5px;
        font-size: 16px;
        color: #222527;
        height: 30px;
        line-height: 30px;
        @include ellipsis;
        &:hover {
          color: $activeColor;
        }
      }
    }
  }
}
</style>
