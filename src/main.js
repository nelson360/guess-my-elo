//import { createApp } from 'vue'
import App from './App.vue'
import Bus from './bus.js'
import router from '/router.js'
import Antd from 'ant-design-vue'

import Vue from 'vue' 


/* eslint-disable no-new */
window.vm = new Vue({
    el: '#app',
    render: h => h(App).use(Bus).use(Antd).use(router).mount('#app')
  })
  
//createApp(App).use(router).use(Antd).mount('#app')
