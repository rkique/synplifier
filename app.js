var http = require('http');
var fs = require('fs');
var mongo = require('mongodb')

var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

http.createServer(function (req, res) {
  fs.readFile('terms.json', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);    