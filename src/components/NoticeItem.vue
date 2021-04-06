<template>
  <div class="notice-item">
    <p>{{item.title}}</p>
    <div class="n-time"><span><i class="time-icon"></i>{{$moment(item.publishdate).format('YYYY-MM-DD')}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss" scoped>
@import '../assets/css/base.scss';
.notice-item {
  p {
    font-weight: bold;
    @include ellipsis;
    &:hover{
      color: $activeColor
    }
  }
  .n-time {
    text-align: right;
    margin: 10px 0;
    span {
      position: relative;
      padding-left: 30px;
    }
  }
}
</style>
