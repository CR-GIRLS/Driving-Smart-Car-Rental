var mongoose = require('mongoose'), Contact = mongoose.model('contact');


module.exports={
    
    SaveContactUs: function(req,res){
        console.log("I am inside save contact");
        var contactInfo = req.body;
        Contact.create(contactInfo, function(err, result){
            if (err) {res.render("Error inserting data")}
            req.flash("error", "We have received your request. We will contact you shortly!!");
            res.redirect('/contactus');
        })
        
    }
}