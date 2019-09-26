// [START initialize_firebase_in_sw]
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
// Initialize Firebase
firebase.initializeApp({
  'messagingSenderId': '1017603592509'
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('Push message received background', payload);
  var obj = JSON.parse(payload.data.notification);
  var notificationTitle = obj.title;
  var tag = 'simple-push-demo-notification-tag';
  var notificationOptions = {
    body: obj.body,
    icon: obj.icon
  };
  return self.ServiceWorkerRegistration.showNotification(notificationTitle,
    notificationOptions);
});
// [END initialize_firebase_in_sw]