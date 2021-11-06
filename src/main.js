import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import Loader from '@/components/app/Loader'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyBxV4Tw1Uuei8k0W-W007uAwGC0nxA0uTo",
  authDomain: "vue-crm-7915b.firebaseapp.com",
  databaseURL: "https://vue-crm-7915b-default-rtdb.firebaseio.com",
  projectId: "vue-crm-7915b",
  storageBucket: "vue-crm-7915b.appspot.com",
  messagingSenderId: "393490489297",
  appId: "1:393490489297:web:a28c93639ed3d0b4fecaf0",
  measurementId: "G-2BVB9DE8CM"
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
