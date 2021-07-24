var mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
    {
        Firstname:{type:String},
        Lastname:{type:String},
        Email:{type:String},
        Birthdate:{type:Date},
        Driving_license:{type:String},
        Address:{type:String},
        Phone_number:{type:String}
    }
);
mongoose.model('user',userSchema);