<template>
  <div class="sidebar">
    <h4>
      <img v-if="pageFlag" src="../assets/img/huiwu.png" />
      <img v-else src="../assets/img/jingsai.png" />
    </h4>
    <ul>
      <li
        :class="{ cur: index === sideIndex }"
        v-for="(item, index) in sideList"
        @click="handleItem(item,index)"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pageName: {
      type: String,
      default: () => ''
    },
    sideList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      sideIndex: 0
    }
  },
  computed: {
    pageFlag () {
      return this.pageName === 'huiwu'
    }
  },
  methods: {
    handleItem (item, index) {
      this.sideIndex = index
      this.$emit('handleSide', item)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/base.scss";
.sidebar {
  width: 200px;
  margin: 20px 0;
  background-color: #f5f2f0;
  h4 {
    width: 200px;
    height: 88px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  ul {
    padding: 15px 8px;
    li {
      width: 100%;
      line-height: 50px;
      text-align: center;
      font-size: 20px;
      margin-bottom: 20px;
      background-color: #fff;
      &.cur {
        background-color: #fcab00;
      }
      // &:hover {
      //   color: $activeColor;
      // }
    }
  }
}
</style>
