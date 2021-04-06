<template>
  <div class="submit">
    <div class="submit-tit container">在线提交</div>
    <div class="submit-con container">
      <div class="con">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item prop="userName">
            <h3><i class="name-icon"></i>用户名称</h3>
            <el-input v-model="form.userName"></el-input>
          </el-form-item>
          <el-form-item prop="schoolName">
            <h3><i class="des-icon"></i>学校名称</h3>
            <el-select v-model="form.schoolName" placeholder="请选择">
              <el-option
                v-for="item in schoolList"
                :key="item.Id"
                :label="item.Name"
                :value="item.Name"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="telephone">
            <h3><i class="des-icon"></i>电话号码</h3>
            <el-input v-model="form.telephone"></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <h3><i class="des-icon"></i>电子邮箱</h3>
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item prop="attachType">
            <h3><i class="type-icon"></i>作品类型</h3>
            <el-select v-model="form.attachType" placeholder="请选择活动区域">
              <el-option
                v-for="(vakue, key, index) in fileType"
                :label="vakue"
                :value="vakue"
                :key="index"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <h3><i class="send-icon"></i>作品上传</h3>
            <input type="file" id="upfile" />
          </el-form-item>
          <el-form-item>
            <el-button round type="primary" @click="onSubmit('form')"
              >提交</el-button
            >
            <el-button round type="primary">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-dialog
      title="提示信息"
      center
      :show-close="false"
      :visible.sync="successFlag"
    >
      <h2 style="text-align: center">{{ successText }}</h2>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="goBack">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  getActivitySchool,
  getAttendActivity,
  getActivityAttachType
} from '../http/api.js'
import { baseURL } from '../utils/config.js'
export default {
  data () {
    return {
      fileType: {},
      schoolList: [],
      successFlag: false,
      successText: '',
      form: {
        userName: '',
        schoolName: '',
        telephone: '',
        email: '',
        attachType: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入用户名称', trigger: 'blur' }
        ],
        schoolName: [
          { required: true, message: '请输入学校名称', trigger: 'blur' }
        ],
        telephone: [
          { required: true, message: '请输入电话号码', trigger: 'blur' }
        ],
        email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
        attachType: [
          { required: true, message: '请选择文件类型', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    this.id = this.$route.query.id
    this.name = this.$route.query.name
    this._getActivitySchool(this.name)
    this._getActivityAttachType()
  },
  methods: {
    onnSubmit (formName) {
      console.log(formName)
      const query = {
        activityId: this.id,
        userName: this.form.userName,
        schoolName: this.form.schoolName,
        telephone: this.form.telephone,
        email: this.form.email,
        attachType: this.form.attachType
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const file = { upfile: document.getElementById('upfile').files[0] }
          this._getAttendActivity(query, file)
        } else {
          return false
        }
      })
    },
    onSubmit () {
      const query = {
        activityId: this.id,
        userName: this.form.userName,
        schoolName: this.form.schoolName,
        telephone: this.form.telephone,
        email: this.form.email,
        attachType: this.form.attachType
      }
      var file = document.getElementById('upfile').files[0]
      var formData = new FormData()
      formData.append('file', file)
      // for (const key in query) {
      //   formData.append(key, query[key])
      // }
      var xhr = new XMLHttpRequest()
      xhr.open(
        'POST',
        `${baseURL}/api/ApiActivity/AttendActivity?activityId=${query.activityId}&userName=${query.userName}&schoolName=${query.schoolName}&telephone=${query.telephone}&email=${query.email}&attachType=${query.attachType}`
      )
      xhr.send(formData)
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log('成功发送~')
        }
      }
    },
    _getActivitySchool (name) {
      const query = {
        activityManage: name
      }
      getActivitySchool(query)
        .then((res) => {
          this.schoolList = res
        })
        .catch((err) => {
          console.log(err)
        })
    },
    _getActivityAttachType () {
      getActivityAttachType()
        .then((res) => {
          this.fileType = res
        })
        .catch((err) => {
          console.log(err)
        })
    },
    _getAttendActivity (query, formData) {
      getAttendActivity(query, formData)
        .then((res) => {
          if (res.IsSuccess) {
            this.successText = '您已经成功报名，请按时参加会议'
          } else {
            this.successText = res.ErrorMessage
          }
          this.successFlag = true
        })
        .catch((err) => {
          console.log(err)
        })
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    goBack () {
      this.successFlag = false
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.submit {
  h3 {
    width: 100%;
  }
  .submit-tit {
    margin-top: 20px;
    height: 70px;
    line-height: 50px;
    background: url("../assets/img/con-bg.png") no-repeat;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
  }
  .submit-con {
    padding: 20px;
    background-color: #f7f7f7;
    margin-bottom: 20px;
    .con {
      width: 1160px;
      padding: 20px 250px;
      margin: 0 auto;
      background: #eaedef;
      .tip-mes {
        color: #f08800;
      }
    }
  }
}
</style>
