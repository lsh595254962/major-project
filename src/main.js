import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import Video from 'video.js'
import './assets/css/reset.css'
import 'video.js/dist/video-js.css'
import filters from './utils/filter'
import { baseURL } from './utils/config'
import {
  Button,
  Carousel,
  CarouselItem,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Radio,
  RadioGroup,
  Upload,
  Breadcrumb,
  BreadcrumbItem,
  Dialog,
  Pagination,
  Table,
  TableColumn
} from 'element-ui'

for (const key in filters) {
  Vue.filter(key, filters[key])
}
Vue.config.productionTip = false
Vue.prototype.$video = Video
Vue.prototype.$baseURL = baseURL
Vue.prototype.$moment = moment
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Upload)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
