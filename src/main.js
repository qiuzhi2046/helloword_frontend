
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' //引入中文包
import './assets/css/global.css'; // 引入全局样式文件

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'//引入fontawesome核心文件

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'//引入fontawesome组件

import {faGlobe, faPhone,faUserSecret} from '@fortawesome/free-solid-svg-icons'//引入需要的图标

import Antd from 'ant-design-vue'; //引入Ant Design Vue组件库
import 'ant-design-vue/dist/reset.css'; //引入Ant Design Vue组件库的样式重置文件

/* add icons to the library */
library.add(faUserSecret,faGlobe)




const app = createApp(App)

app.use(Antd); //注册Ant Design Vue组件库

app.config.productionTip = false //阻止启动生产消息
app.component('font-awesome-icon', FontAwesomeIcon) //注册fontawesome组件

app.use(router)
// app.use(ElementPlus)
app.use(ElementPlus, { size: 'small', zIndex: 3000,locale: zhCn, })
//可以有size和弹出组件层级的全局设置,和中文包





app.mount('#app')
