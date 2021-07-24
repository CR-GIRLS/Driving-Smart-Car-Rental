//import libraries
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
const bodyParser = require('body-parser');


//db connection
db_URL = "mongodb+srv://vahidadb:vahida@123@cluster0.zwipe.mongodb.net/DriveSmartCarRental?retryWrites=true&w=majority";


mongoose.connect(db_URL, {useUnifiedTopology:true, useNewUrlParser:true}, function(){
    try{
        if(mongoose.connection.readyState==1){
            console.log("Successfully connected to the database");
        }
        else{
            console.log("Unable to connect to the database");
        }
    }catch(err){
        throw err;
    }
});

//import model and controller
require('./models/usermodel');
require('./models/vehiclemodel');
var userController = require('./controllers/usercontroller.js');
var vehicleController = require('./controllers/vehiclecontroller.js');

//express app
var app = express()
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')



app.get(['/','/index'], function(req,res){
    res.render('index.ejs')
});

app.get('/signin', function(req,res){
    res.render('SignIn.ejs')
});

app.get('/signup', function(req,res){
    res.render('SignUp.ejs')
});

app.get('/car', function(req,res){
    res.render('car.ejs')
});

app.get('/suv', function(req,res){
    res.render('suv.ejs')
});

app.get('/van', function(req,res){
    res.render('van.ejs')
});

app.get('/aboutus', function(req,res){
    res.render('Aboutus.ejs')
});

app.get('/contactus', function(req,res){
    res.render('Contactus.ejs')
});

app.get('/bookingform', function(req,res){
    res.render('bookingform.ejs')
});



app.get('/users', userController.GetAll);
app.get('/users/save', userController.SaveUser);
app.get('/vehicles', vehicleController.GetAll);

app.listen(5000,function(){
    console.log("Listenig to port 5000");
});

