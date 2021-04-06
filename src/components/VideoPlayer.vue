<template>
  <div class="player-box">
    <Video ref="videoPlayer" class="video-js"></Video>
  </div>
</template>

<script>

export default {
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  mounted () {
    this.player = this.$video(this.$refs.videoPlayer, this.options, function onPlayerReady () {
      console.log('onPlayerReady', this)
    })
  },
  beforeDestroy () {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
