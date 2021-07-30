//import libraries
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
const bodyParser = require('body-parser');
var session = require('express-session');
const methodOverride = require('method-override');

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
app.set('view engine','ejs');
app.use(session({secret: "Shh, its a secret!",saveUninitialized: true,resave: true}));
app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    next();
  });
app.use(methodOverride('_method'));


app.get(['/','/index'], vehicleController.GetVehiclesOnOffer);

app.get('/signin', function(req,res){
    res.render('SignIn');
});

app.post('/login',userController.LoginUser);

app.get('/logout',(req,res) => {
    req.session.destroy();
    res.render('logout');
});

app.get('/signup', function(req,res){
    res.render('SignUp');
});

app.post('/signup/add',userController.SaveUser);

app.get('/car', vehicleController.GetCars);

app.get('/book/:id',function(req,res){
    theId= req.params.id;
    console.log(theId);
    res.render('SignIn', vehicleController.GetCarById(theId));
});

app.get('/suv', vehicleController.GetSUVs);

app.get('/van', vehicleController.GetVans);

app.get('/aboutus', function(req,res){
    res.render('Aboutus')
});

app.get('/contactus', function(req,res){
    res.render('Contactus')
});

app.get('/bookingform', function(req,res){
    res.render('bookingform')
});

app.get('/myprofile', userController.GetUserById);

app.put('/myprofile/update',userController.EditUser);

// app.get('/users', userController.GetAll);
app.get('/users/save', userController.SaveUser);
app.get('/vehicles', vehicleController.GetAll);

app.listen(5000,function(){
    console.log("Listenig to port 5000");
});

