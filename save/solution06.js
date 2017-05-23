var mongo = require('mongodb').MongoClient;

var dbName = process.argv[2];

var myUrl = 'mongodb://localhost:27017/' + dbName;

mongo.connect(myUrl, function(e, db) {
  if (e) throw e;
  
  var collection = db.collection('users');
  collection.update({ username: 'tinatime' }, { $set: { age: 40 }}, 
          function(err, data) {
    if (err) throw err;
    db.close();
  });
});
