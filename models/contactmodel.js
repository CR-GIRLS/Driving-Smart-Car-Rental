var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema(
    {
        Firstname:{type:String},
        Lastname:{type:String},
        Email:{type:String},
        Phone_number:{type:String},
        Subject:{type:String}
    }
);
mongoose.model('contact',contactSchema);