var fs = require('fs')
var http = require('http');
//var MongoClient = require('mongodb').MongoClient;



var obj = JSON.parse(fs.readFileSync('terms.json', 'utf8'));



http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h1>" + obj.terms[0].key1 +"</h1>");
  //process.env.PORT is the heroku assigned port for the server
}).listen(process.env.PORT || 3000, function () {console.log("server started port 3000")})





//var url = "mongodb://localhost:27017/";

/*MongoClient.connect(url, function(err, db) {

  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { short: "Plasmid", definition: "A small circular fragment of DNA"};
  dbo.collection("customers").insertOne(myobj, function(err,res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});*/
