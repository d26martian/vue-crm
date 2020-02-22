import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import Paginate from 'vuejs-paginate'
import currencyFilter from './filters/currency.filter'
import localizeFilter from './filters/localize.filter'
import dateFilter from './filters/date.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from './utils/message.plugin'
import Loader from '@/components/Loader/Loader'
import './regiserServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);
Vue.filter('localize', localizeFilter);
Vue.filter('currency', currencyFilter);
Vue.directive('tooltip', tooltipDirective);
Vue.component('Loader', Loader);
Vue.component('Paginate', Paginate);

firebase.initializeApp({
  apiKey: "AIzaSyAKoRLad8owRyWWKBtkUyLnu7mAzLL2TEU",
  authDomain: "vue-crm-b1441.firebaseapp.com",
  databaseURL: "https://vue-crm-b1441.firebaseio.com",
  projectId: "vue-crm-b1441",
  storageBucket: "vue-crm-b1441.appspot.com",
  messagingSenderId: "1018089285201",
  appId: "1:1018089285201:web:d344931cac434c46b2ba70"
});

Vue.prototype.$locale = key => localizeFilter(key);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});
