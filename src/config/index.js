import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb://wafaa:wafaa@987@ds123434.mlab.com:23434/chattychatchat",
  "bodyLimit": "100kb"
}
