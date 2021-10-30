import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
// console.log(initializeApp.auth) // Undefined
// console.log(initializeApp.default.auth) // Function

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyBxV4Tw1Uuei8k0W-W007uAwGC0nxA0uTo",
  authDomain: "vue-crm-7915b.firebaseapp.com",
  projectId: "vue-crm-7915b",
  storageBucket: "vue-crm-7915b.appspot.com",
  messagingSenderId: "393490489297",
  appId: "1:393490489297:web:d6a64d3e25166931fecaf0",
  measurementId: "G-DY2NTSJ2D0"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
