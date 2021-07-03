const express = require('express');
const mongoClient = require('mongodb').MongoClient;

//
const app = express();
app.set(express.static('public'));
app.set('view engine','ejs');
var urlencodeparser = express.urlencoded({extended:false});


const db_url = "mongodb+srv://vahidadb:vahida@123@cluster0.zwipe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const database_name = "DriveSmartCarRental";

app.get('/',function(req,res){
    mongoClient.connect(db_url,function(err,dbserver){
        if(err) throw err;
        var mydb = dbserver.db(database_name);
        mydb.collection('users').find({}).toArray(function(err,results){
            res.render('home.ejs',{users:results})
            
        });
    });
    
})

console.log('Hello from CR GIRLS')
app.listen(5000);

