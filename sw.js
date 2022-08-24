self.addEventListener('push',()=>{
    //self.registration.sendNotification('text message',{})
    self.registration.showNotification('Test show push message',{
        body: 'Buzz! Buzz!',
        icon: '../images/touch/chrome-touch-icon-192x192.png',
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        tag: 'vibration-sample'
      })
})