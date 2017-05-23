var mongo = require('mongodb').MongoClient;
var age = process.argv[2];

var myUrl = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(myUrl, function(e, db) {
  if (e) throw e;
  var parrots = db.collection('parrots');
  parrots.find({
    age: {
      $gt: +age
    }
  }, {
    name: 1, age: 1, _id: 0
  }).toArray(function(e, docs) {
    if (e) throw e;
    console.log(docs);
    db.close();
  })
})