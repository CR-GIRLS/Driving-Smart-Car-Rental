var mongoose = require('mongoose'), Booking = mongoose.model('booking');

module.exports={
    GetAll: function(req,res){
        console.log("I am inside get all the Vehicle");
        Vehicle.find({},function(err, results){
            if (err) throw err;
            res.render('Aboutus.ejs');
        })        
    },
}