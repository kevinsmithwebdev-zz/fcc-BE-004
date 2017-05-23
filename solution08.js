var mongo = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/learnyoumongo";

var checkAge = parseInt(process.argv[2],10);

mongo.connect(url, function(err, db) {
  if (err) throw (err);
    
  var parrotsDB = db.collection('parrots');
    parrotsDB.count({ age: { $gt: checkAge }},
      function(err, count) {
        if (err) throw err;
        console.log(count);
        db.close();
    }); // db.collection + count
}); // mongo.connect