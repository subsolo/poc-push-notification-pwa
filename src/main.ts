import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import * as firebase from "firebase";

Vue.config.productionTip = false;

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC2kmxzt1Y6QNF-V7V4O-GhaI3cFNw13w8",
  authDomain: "poc-push-notification-js.firebaseapp.com",
  databaseURL: "https://poc-push-notification-js.firebaseio.com",
  projectId: "poc-push-notification-js",
  storageBucket: "",
  messagingSenderId: "1017603592509",
  appId: "1:1017603592509:web:e7c0e3efefb440911f7554",
  measurementId: "G-P2417NBQ1N"
};
firebase.initializeApp(config);

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

// Add the public key generated from the console here.
messaging.usePublicVapidKey("BMsA3KiUZRNb_CRVAftaJrUrhbcUI1wOflNvsYJViyR4FOrOqAbIp5R8g3y7heiSFV5m9V9WD7ycdMZwpy1AsUY");

messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');
  messaging.getToken().then((token) => {
    console.log(token);
  })
}).catch((err) => {
  console.log('Unable to get permission to notify.', err);
});

messaging.onMessage(function(payload) {
  console.log('Mensagem PUSH: ', payload);
  var obj = JSON.parse(payload.data.notification);
  alert(obj.body)
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
