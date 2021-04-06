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
    onSubmit (formName) {
      console.log(formName)
      // const query = {
      //   activityId: this.id,
      //   userName: this.form.userName,
      //   schoolName: this.form.schoolName,
      //   telephone: this.form.telephone,
      //   email: this.form.email,
      //   attachType: this.form.attachType
      // }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const fd = new FormData() // 创建一个表单对象
          const ajax = new XMLHttpRequest()
          // fd.append('activityId', this.id)
          const { userName, schoolName, telephone, email, attachType } = this.form
          /* 把文件添加到表单里 */
          fd.append('upfile', document.getElementById('upfile').files[0])
          ajax.open('post', `${baseURL}/api/ApiMeeting/AttendMeeting?activityId=${this.id}
            &userName=${userName}
            &schoolName=${schoolName}
            &telephone=${telephone}
            &email=${email}
            &attachType=${attachType}
          `, true)
          // ajax.setRequestHeader('token', '11111') // 设置 请求头
          ajax.onload = function () {
            console.log('准备完毕')
          }
          ajax.send(fd) // 发送 ajax请求 上传文件
          ajax.onreadystatechange = function () {
            if (ajax.readyState === 4 && ajax.status === 200) {
              // 步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
              console.log(ajax.responseText) // 输入相应的内容
            }
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
      // this._getAttendActivity(query)
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
    _getAttendActivity (query) {
      getAttendActivity(query)
        .then((res) => {
          console.log(res)
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
