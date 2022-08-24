const push=require('web-push');
//let pubprvkeys= push.generateVAPIDKeys();
const validKeys={
    publicKey: 'BCqpCNT1hZpZVPQ7ht0KxNgTfS43-jzrkjfHdPJLQi_QPu0Wmqwtl4q97eC92Ut20egOFg0BVVDE9b-ojd3xKEE',
    privateKey: '2f9nkhuILBAULTPDrs171U8KnTqd8wxHTkt0orRd4uQ'
  }

  push.setVapidDetails('mailto:v.pius.pv@gmail.com',validKeys.publicKey,validKeys.privateKey);
  let sub=
    {
        endpoint:"https://fcm.googleapis.com/fcm/send/draJPtLTWEw:APA91bHhFhfU1b2rITMeRpN3AuGpagk2c3gtLRVziLFhpJM8HFTVhc5goDwtE_H2SxrhwieO4xcVKdOjK2CJCM3dbpCRsFX4V0FZ7vkcIuWFDfEmTG_yBmOfL0nCPdr_wnDyv_fuIYgs",
    expirationTime:null,
    keys:{"p256dh":"BPp89auqICvJJ6lZOCQ4YE_RvkU2GkYFMb4XegSuXOT69iBl5JXYGhdtK40eBMyERozOr06uu2YBSFQrWzx9wjA",
    auth:"yZxlV_SQCyjMr9XCfqIs-A"}
}
  

  push.sendNotification(sub,'text message')