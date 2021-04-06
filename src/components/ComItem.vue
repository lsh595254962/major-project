<template>
  <div class="com-item clearfix">
    <p @click="goDetail(item)">{{ item.title }}</p>
    <span>{{ $moment(item.publishdate).format('YYYY-MM-DD') }}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    goDetail (item) {
      this.$emit('goDetail', item)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/base.scss";
.com-item {
  line-height: 40px;
  height: 40px;
  p {
    font-weight: bold;
    width: 80%;
    height: 100%;
    float: left;
    position: relative;
    padding-left: 15px;
    @include ellipsis;
    &:hover{
      color: $activeColor;
    }
    &::before {
      content: "";
      width: 8px;
      height: 8px;
      border-radius: 50%;
      position: absolute;
      background-color: #000;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  span {
    width: 20%;
    float: left;
    text-align: center;
  }
}
</style>
