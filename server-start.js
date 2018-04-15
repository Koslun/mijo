process.env.NODE_ENV= process.env.NODE_ENV || 'development';
process.env.SERVER_PORT= process.env.SERVER_PORT || '4040';
process.env.JWT_SECRET='0a6b944d-d2fb-46fc-a85e-0295c986cd9f';
// original scaffold db
// process.env.MONGO_HOST='mongodb://ds119059.mlab.com:19059/mijo';
// mlab db on epoxy account
// process.env.MONGO_HOST='mongodb://mijo:hack3denmark@ds119059.mlab.com:19059/mijo';

// MongoDB Atlas db on koslun account, PW: LJzW2SAHvOWW6vkR
// TODO: remove hard-coded password
process.env.MONGO_HOST='mongodb://admin_user:LJzW2SAHvOWW6vkR@mijo-shard-00-00-trk4r.mongodb.net:27017,mijo-shard-00-01-trk4r.mongodb.net:27017,mijo-shard-00-02-trk4r.mongodb.net:27017/test?ssl=true&replicaSet=Mijo-shard-0&authSource=admin';
process.env.MONGO_PORT='27017';
require('babel-register');
require("babel-polyfill");
require('./server');
