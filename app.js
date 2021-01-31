var fs = require('fs')
//var MongoClient = require('mongodb').MongoClient;

var obj = JSON.parse(fs.readFileSync('terms.json', 'utf8'));

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/style.css',function(req,res){
  res.sendFile(path.join(__dirname+'/style.css'));
});

router.get('/dict.js',function(req,res){
  res.sendFile(path.join(__dirname+'/dict.js'));
});

//read index.html (with routes to css and js set above)
app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('index.html', function(err, data) {
    res.write(data);
    return res.end();
  });
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Running at Port 3000');


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
