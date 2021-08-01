var mongoose = require('mongoose'), Contact = mongoose.model('contact');


module.exports={
    
    SaveContactUs: function(req,res){
        console.log("I am inside save contact");
        var contactInfo = req.body;
        Contact.create(contactInfo, function(err, result){
            if (err) {res.render("Error inserting data")}
            res.redirect('/index');
        })
        
    }
}