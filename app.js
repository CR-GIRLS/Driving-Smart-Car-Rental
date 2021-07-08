const { response } = require('express');
const express = require('express');

const db = require('./db.js');

//
const app = express();
app.set(express.static('public'));
app.set('view engine','ejs');
var urlencodeparser = express.urlencoded({extended:false});


app.get('/',function(req,res){
   
    var results =  db.GetAllUsersData(function(){
        console.log(response);
        res.render('home.ejs',{users:response});
    });
   
})

app.get('/aboutus',function(req,res){
   
        res.render('Aboutus.ejs');
   
})

console.log('connected...');
app.listen(5000);

