var mongo = require('mongodb').MongoClient;

var dbName = 'learnyoumongo';
var collName = 'parrots';
var ageCheck = process.argv[2];

var myUrl = 'mongodb://localhost:27017/' + dbName;

mongo.connect(myUrl, function(e, db) {
  if (e) throw e;
  
  var collection = db.collection(collName);
  collection.count({age: { $gt: +ageCheck }}, 
          function(err, num) {
    if (err) throw err;
    console.log(num);
    db.close();
  });
});
