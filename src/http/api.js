import { get, post } from './index'

// <-----------首页数据接口------------->
// 获取导航数据
export const getNavData = () => get('/api/ApiSearchPortal/NavItems')

// 获取节点数据
export const getPortalData = query =>
  get(`/api/ApiSearchPortal/${query}/PortalData`)

// <-----------会务活动接口------------->
// 获取活动分类
export const getActivityType = () => get('/api/ApiActivity/ActivityType')
// 获取会议分类
export const getMeetingType = () => get('/api/ApiMeeting/MeetingType')

// 获取活动列表
export const getActivityList = query =>
  get('/api/ApiActivity/ActivityList', query)
// 获取会议列表
export const getMeetingList = query =>
  get('/api/ApiMeeting/MeetingList', query)

// 列表页第一页数据
export const getSearchFirstPageData = name =>
  get(`/api/ApiSearchPortal/${name}/SearchFirstPageData`)
// 分页数据
export const getSearchNextPageData = (name, query) =>
  get(`/api/ApiSearchPortal/${name}/SearchNextPageData`, query)

// 获取会议相关学校
export const getMeetingSchool = query =>
  get('/api/ApiMeeting/MeetingSchool', query)
// 获取竞赛相关学校
export const getActivitySchool = query =>
  get('/api/ApiActivity/ActivitySchool', query)
// 获取附件类型
export const getActivityAttachType = query =>
  get('/api/ApiActivity/ActivityAttachType', query)
// 提交参会表单
export const getAttendMeeting = params =>
  post(
    `/api/ApiMeeting/AttendMeeting?meetingId=${params.meetingId}
      &userName=${params.userName}
      &schoolName=${params.schoolName}
      &needAccommodationFlag=${params.needAccommodationFlag}
      `
  )
// 获取会议详情
export const getMeetingDetail = query =>
  get('/api/ApiMeeting/MeetingDetail', query)
// 获取会议详情
export const getDetailData = query =>
  get('/api/ApiSearchPortal/DetailData', query)
// 参加活动
export const getAttendActivity = (query, params) =>
  post(
    `/api/ApiActivity/AttendActivity?activityId=${query.activityId}
      &userName=${query.userName}
      &schoolName=${query.schoolName}
      &telephone=${query.telephone}
      &email=${query.email}
      &attachType=${query.attachType}
      `,
    params
  )
// 获取活动奖项列表
export const getActivityPrize = query =>
  get('/api/ApiActivity/ActivityPrize', query)
// 参加活动人员名单
export const getActivityAttended = query =>
  get('/api/ApiActivity/ActivityAttended', query)
