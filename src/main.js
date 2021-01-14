import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IkV6ZXF1aWFzIFJvY2hhIiwiZW1haWwiOiJlemVxdWlhcy5yb2NoYTlAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTYxMDY1OTQ5NiwiZXhwIjoxNjEwOTE4Njk2fQ.5IyCKDbaD28Z6AnsKYlpJLRXV9jEzHXtMZFpNtcdzho'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')