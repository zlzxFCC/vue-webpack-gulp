import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import {routerMode} from './config/env'
import './config/rem'
import './config/share'
import FastClick from 'fastclick'
import axios from 'axios'
import VueMaterial from 'vue-material'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import VueLazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(MuseUI)
Vue.use(infiniteScroll)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./images/404.png'),
  loading: require('./images/loading.gif'),
  attempt: 1
})







if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}


Vue.prototype.$http = axios

Vue.use(VueMaterial)

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production'
})

new Vue({
	router,
	store,
}).$mount('#app')
