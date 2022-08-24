const push=require('web-push');
//let pubprvkeys= push.generateVAPIDKeys();
const validKeys={
    publicKey: 'BCqpCNT1hZpZVPQ7ht0KxNgTfS43-jzrkjfHdPJLQi_QPu0Wmqwtl4q97eC92Ut20egOFg0BVVDE9b-ojd3xKEE',
    privateKey: '2f9nkhuILBAULTPDrs171U8KnTqd8wxHTkt0orRd4uQ'
  }

  push.setVapidDetails('mailto:v.pius.pv@gmail.com',validKeys.publicKey,validKeys.privateKey);
  let sub={}

  push.sendNotification(sub,'text message')