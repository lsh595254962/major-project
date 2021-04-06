<template>
  <div>
    <el-upload action="#" :on-error="upError" :limit="10" :multiple="true" list-type="picture-card" :auto-upload="false">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
      <p class="tip-mes"> *请上传JPG/JPEG/GIF或者PNG格式的，不超过10M大小的图片，最多不超过10张</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    }
  },
  methods: {
    handleRemove (file) {
      console.log(file)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload (file) {
      console.log(file)
    },
    upError (err, file, fileList) {
      console.log(err, file, fileList)
    }
  }
}
</script>
<style lang="scss" scoped>
/deep/ .el-upload--picture-card{
  border: none;
}
</style>
