var mongo = require('mongodb').MongoClient;
var age = process.argv[2];

var dbUrl = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(dbUrl, function(e, db) {
  if (e) throw e;
  var parrots = db.collection('parrots');
  parrots.find({
    age: {
      $gt: +age
    }
  }).toArray(function(e, docs) {
    if (e) throw e;
    console.log(docs);
    db.close();
  });
});