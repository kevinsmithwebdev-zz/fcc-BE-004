var mongo = require('mongodb').MongoClient;

var dbName = 'learnyoumongo';
var sizeCheck = process.argv[2];


var myUrl = 'mongodb://localhost:27017/' + dbName;

mongo.connect(myUrl, function(e, db) {
  if (e) throw e;
  
  var collDB = db.collection('prices');
  collDB.aggregate([
      { $match: { size: sizeCheck }}, 
      { $group: { _id: 'average', average: { $avg: '$price'}}}
    ]).toArray(function(e, results) {
      
    if (e) throw e;

    console.log(Number(results[0].average).toFixed(2));
    db.close();
  });
});