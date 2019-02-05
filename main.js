import Vue from 'vue'
import App from './App'
import NavCenter from "./components/nav-center/nav-center.vue"
import GoodsShow from "./components/goods-show/goods-show.vue"


Vue.component('nav-center',NavCenter)
Vue.component('goods-show',GoodsShow)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

Vue.config.productionTip = false