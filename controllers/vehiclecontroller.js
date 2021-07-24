var mongoose = require('mongoose'), User = mongoose.model('vehicle')

module.exports={
    GetAll: function(req,res){
        console.log("I am inside get all the Vehicle");
       User.find({},function(err, results){
            if (err) throw err;
            console.log(results);
            res.render('Aboutus.ejs');
        })        
    }
}