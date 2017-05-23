var mongo = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/learnyoumongo";
var checkAge = parseInt(process.argv[2],10);

mongo.connect(url, function(err, db) {
  if (err) throw (err);
    
  var parrotsDB = db.collection('parrots');
    parrotsDB.find({
      age: { $gt: checkAge }}, { name: 1, age: 1, _id: 0 }
    ).toArray(function(err, documents) {
      if (err) throw err;
      console.log(documents);
      db.close();
    }); // db.collection + toArray
}); // mongo.connect