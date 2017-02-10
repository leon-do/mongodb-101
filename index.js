var MongoClient = require('mongodb').MongoClient

// Connection URL
var url = 'mongodb://localhost:27017/test';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {

  console.log("Connected successfully to server");

  //List all
  db.collection('myCollection').find().toArray(function(err, data) {
    console.log(data)
  });

  //Insert data
  db.collection('myCollection').insertMany([{name:'nodeman', age:99}])


});
