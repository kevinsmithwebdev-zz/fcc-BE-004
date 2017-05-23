var mongo = require('mongodb').MongoClient;

var dbName = process.argv[2];

var url = "mongodb://localhost:27017/" + dbName;

var userName = "tinatime";
var newAge = 40;

mongo.connect(url, function(err, db) {
  if (err) throw (err);
  var collection = db.collection('users');
  
  collection.update({ username: userName}, {
      $set: { age: newAge }
    }, function(err, data) {
      if (err) throw err;
      collection.close();
    });
}); // mongo.connect