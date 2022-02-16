import { createApp } from 'vue'
import App from './App.vue'
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.less';
import router from "./router";
const app = createApp(App)
app.use(router)
app.mount('#app')
