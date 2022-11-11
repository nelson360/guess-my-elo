import { createApp } from 'vue'
import App from './App.vue'
import router from '/router.js'
import Antd from 'ant-design-vue'
import Vue from 'vue' 


/* eslint-disable no-new */
window.vm = new Vue({
    el: '#app',
    render: h => h(App)
  })
  
createApp(App).use(router).use(Antd).mount('#app')
