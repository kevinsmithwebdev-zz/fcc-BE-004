var mongo = require('mongodb').MongoClient;

var myUrl = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(myUrl, function(e, db) {
  if (e) throw e;
  
  var doc = { firstName: process.argv[2], lastName: process.argv[3] }
  
  var collection = db.collection('docs');
  collection.insert(doc, function(err, data) {
    if (err) throw err;
    console.log(JSON.stringify(doc));
    db.close();
  });
});