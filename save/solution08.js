var mongo = require('mongodb').MongoClient;
var dbName = 'learnyoumongo';
var sizeCheck = process.argv[2];


var myUrl = 'mongodb://localhost:27017/' + dbName;

mongo.connect(myUrl, function(e, db) {
  if (e) throw e;
  var prices = db.collection('prices');
  prices.aggregate([
      { $match: { size: sizeCheck }}, 
      { $group: { _id: 'average', average: { $avg: '$price'}}}
    ]).toArray(function(e, results) {
      
    if (e) throw e;
    if (!results.length) throw new Error('No results found');

    var data = results[0];
    console.log(Number(data.average).toFixed(2));
    db.close();
  })
})