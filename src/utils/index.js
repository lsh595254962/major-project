export function getDate () {
  var myDate = new Date()
  var year = myDate.getFullYear() // 获取年
  var month = myDate.getMonth() + 1 // 获取月
  var date = myDate.getDate() // 获取日
  var hours = myDate.getHours() // 获取小时
  var minutes = myDate.getMinutes() // 获取分
  var seconds = myDate.getSeconds() // 获取秒
  var weekend = myDate.getDay() // 获取星期几，数字1-7
  var weeks = [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六'
  ]
  var day = weeks[weekend]
  if (month < 10) month = '0' + month
  if (date < 10) date = '0' + date
  if (hours < 10) hours = '0' + hours
  if (minutes < 10) minutes = '0' + minutes
  if (seconds < 10) seconds = '0' + seconds
  return `${year}-${month}-${date}&emsp;${day}`
}
