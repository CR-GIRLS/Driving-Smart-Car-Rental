//import libraries
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
const bodyParser = require('body-parser');
var session = require('express-session');
const methodOverride = require('method-override');
var formidable = require('formidable');
var fs = require('fs');

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
require('./models/bookingmodel');
require('./models/contactmodel');
var userController = require('./controllers/usercontroller.js');
var vehicleController = require('./controllers/vehiclecontroller.js');
var bookingController = require('./controllers/bookingcontroller.js');
var contactController = require('./controllers/contactcontroller.js');

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
    res.locals.Message = res.locals.Message;
    next();
  });
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});
app.use(methodOverride('_method'));
global.__basedir = __dirname;


//Services
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

app.get('/book',vehicleController.GetVehicleById);

app.post('/book/add',bookingController.SaveBooking);

app.put('/book/edit',bookingController.EditBooking);

app.delete('/book/delete',bookingController.DeleteBooking);

app.get('/suv', vehicleController.GetSUVs);

app.get('/van', vehicleController.GetVans);

app.get('/aboutus', function(req,res){
    res.render('Aboutus')
});

app.get('/contactus', function(req,res){
    res.render('Contactus')
});

app.post('/contactus/add',contactController.SaveContactUs);

app.get('/bookingform', bookingController.GetBookingData);

app.get('/myprofile', userController.GetUserById);

app.put('/myprofile/update',userController.EditUser);


app.listen(5000,function(){
    console.log("Listenig to port 5000");
});

