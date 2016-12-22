// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"

import VueRouter from "vue-router"
import VueResource from "vue-resource"
import store from "./vuex/store.js"
import Home from "./components/Home.vue"
import B from "./components/B.vue"
import myNav from "./components/Navbar.vue"
import Products from "./components/Products.vue"
import Basket from "./components/Basket.vue"
import Filter from "./components/Filter.vue"
import cur from "./filters/to-gbp.js"
import ACP from "./components/ACP.vue"

Vue.use(VueResource)
Vue.use(VueRouter)

var routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/basket', component: Basket },
  { path: '/acp', component: ACP },
];

const router = new VueRouter({
  routes
})

const app = new Vue({	
	components: {
		"my-nav": myNav,
		"side-bar": Filter
	},
	filters: {
		cur: cur
	},
	mode: 'history',
	store,
	router,
	mounted(){
		console.log("HI");
	}
	}).$mount("#app")


/* eslint-disable no-new */
