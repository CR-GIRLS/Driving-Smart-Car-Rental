var mongoose = require('mongoose'), User = mongoose.model('user')

module.exports={
    GetAll: function(req,res){
        console.log("I am inside get all the Users");
       User.find({},function(err, results){
            if (err) throw err;
            console.log(results);
            res.render('Aboutus.ejs');
        })        
    },
    SaveUser:async function(req,res){
        console.log("I am inside save user");
        const data = new User({Firstname:"vahida",Lastname:"vadiya"});
        await data.save();
        console.log('USER SAVED');
        res.send("user saved");
    },
}