<template>
  <div class="com-type">
    <ul class="content">
      <li v-for="item in dataList" :key="item.Id">
        <span class="item-tit">{{ item.Name }}</span>
        <span
          ><span>{{ item.StartDate }}</span
          >至<span>{{ item.EndDate }}</span></span
        >
        <span>
          <el-button
            v-if="pageName"
            class="my-btn"
            @click="tellDes(item)"
            round
            type="primary"
            >活动介绍</el-button
          >
          <el-button
            v-if="finish(item.EndDate)"
            class="my-btn"
            @click="goEnter(item)"
            round
            type="primary"
            >报名</el-button
          >
          <el-button
            v-else
            class="my-btn"
            @click="goDetail(item)"
            round
            type="primary"
            >详情</el-button
          >
        </span>
      </li>
    </ul>
    <el-dialog
      title="在线报名"
      center
      :show-close="false"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
    >
      <div class="receipt">
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
          <el-form-item label="学校名称">
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
          <el-form-item label="人员名单">
            <el-input v-model="form.nameList"></el-input>
          </el-form-item>
          <el-form-item label="是否住宿" prop="stay">
            <el-radio-group v-model="form.stay">
              <el-radio :label="1">是</el-radio>
              <el-radio :label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="报名成功"
      center
      :show-close="false"
      :visible.sync="successFlag"
    >
      <h2 style="text-align: center">您已经成功报名，请按时参加会议</h2>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="successFlag = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="活动介绍"
      center
      :show-close="false"
      :visible.sync="tellFlag"
    >
      <div v-html="tellTxt"></div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="tellFlag = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getMeetingSchool, getAttendMeeting } from '../http/api'
export default {
  data () {
    return {
      dialogVisible: false,
      successFlag: false,
      tellFlag: false,
      rules: {
        schoolName: [
          { required: true, message: '请输入学校名称', trigger: 'blur' }
        ],
        nameList: [
          { required: true, message: '请输入人员名单', trigger: 'blur' }
        ],
        stay: [{ required: true, message: '请选择是否住宿', trigger: 'blur' }]
      },
      form: {},
      schoolList: [],
      tellTxt: ''
    }
  },
  props: {
    pageName: {
      type: String,
      default: () => ''
    },
    dataList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    pageFlag () {
      return this.pageName === 'huiwu'
    }
  },
  methods: {
    goEnter (item) {
      if (this.pageFlag) {
        this.dialogVisible = true
        this.meetingId = item.Id
        this._getMeetingSchool(item.ManageName)
      } else {
        this.$router.push({
          path: '/testSub',
          query: { id: item.Id, name: item.ManageName }
        })
      }
    },
    goDetail (item) {
      if (this.pageFlag) {
        // console.log(item)
        this.$router.push({ path: '/detail', query: { id: item.Id } })
      } else {
        this.$router.push({ path: '/testDetail', query: { id: item.Id } })
      }
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
    _getMeetingSchool (ManageName) {
      const query = {
        meetingManage: ManageName
      }
      getMeetingSchool(query)
        .then((res) => {
          this.schoolList = res
        })
        .catch((err) => {
          console.log(err)
        })
    },
    handleSubmit () {
      this.dialogVisible = false
      this.form = {}
      const query = {
        meetingId: this.meetingId,
        userName: this.form.nameList,
        schoolName: this.form.schoolName,
        needAccommodationFlag: this.form.stay
      }
      console.log(query)
      getAttendMeeting(query)
        .then((res) => {
          this.successFlag = true
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    tellDes (item) {
      this.tellTxt = item.Content
      this.tellFlag = true
    },
    // 计算会议是否结束
    finish (time) {
      // 已经结束
      const nextDay = new Date(time).getTime()
      if (nextDay < new Date().getTime() - 86400000) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/base.scss";
.com-type {
  .content {
    margin: 20px;
    padding: 20px;
    background-color: #f5f2f0;
    font-size: 15px;
    border-top: 2px solid #01549a;
    flex: 1;
    li {
      line-height: 40px;
      list-style: circle;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px dashed #000;
      span {
        flex: 1;
        &:first-child {
          flex: 2;
        }
        &.item-tit {
          cursor: pointer;
          position: relative;
          padding-left: 15px;
          @include ellipsis;
          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 8px;
            height: 8px;
            background-color: #fcab00;
            border-radius: 50%;
          }
          &:hover {
            color: $activeColor;
          }
        }
        &:last-child {
          text-align: center;
          .my-btn {
            width: 66px;
            height: 30px;
            line-height: 30px;
            padding: 0;
            color: #fcab00;
            font-weight: 700;
            background-color: #063486;
            border-color: #063486;
          }
        }
      }
    }
  }
  .receipt {
    padding: 20px;
    background: #f7f7f7;
    .submit-btn {
      display: block;
      margin: 10px auto 0;
    }
    .el-form {
      padding-bottom: 20px;
      .el-form-item {
        margin-bottom: 0;
        height: 40px;
        .el-form-item__label {
          background-color: #eaedef;
        }
        /deep/.el-input__inner {
          border: none;
          border-radius: 0;
          border-bottom: 1px solid #eaedef;
        }
      }
    }
  }
}
</style>
