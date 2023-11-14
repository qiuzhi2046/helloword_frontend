
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' //引入中文包
import './assets/css/global.css'; // 引入全局样式文件



const app = createApp(App)

app.use(router)
// app.use(ElementPlus)
app.use(ElementPlus, { size: 'small', zIndex: 3000,locale: zhCn, })
//可以有size和弹出组件层级的全局设置,和中文包





app.mount('#app')
