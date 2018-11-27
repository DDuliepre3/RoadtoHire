// cd mongo/bin
// ./mongod -dbpath ~/Desktop/RoadtoHire/Node/example

const mongoose = require('mongoose'); // npm install --save mongoose

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/People', {userNewUrlParser: true});


module.exports = {
    mongoose
};