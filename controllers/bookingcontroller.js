var mongoose = require('mongoose'), Booking = mongoose.model('booking');
Vehicle = mongoose.model('vehicle');

module.exports={
    GetAll: function(req,res){
        console.log("I am inside get all the booking");
        Booking.find({},function(err, results){
            if (err) throw err;
            res.render('Aboutus.ejs');
        })        
    },
    SaveBooking: function(req,res){
        var bookingInfo = req.body;
        console.log(bookingInfo);
        console.log("I am inside save booking");
        Booking.create(bookingInfo,function(err, results){
            if (err) throw err;
            req.flash("info", "Vehicle Booked Successfully!!");
            res.redirect('/bookingform');
        });        
    },
    EditBooking: function(req,res){
        var bookingInfo = req.body;
        console.log(bookingInfo);
        console.log("I am inside save booking edit");
        Booking.findOneAndUpdate({_id:bookingInfo._id},bookingInfo,{new: true},function(err, results){
            if (err) throw err;
            console.log(results);
            req.flash("info", "Booking Updated Successfully!!");
            res.redirect('/bookingform');
        });        
    },
    DeleteBooking: function(req,res){
        var bookingInfo = req.body;
        console.log("I am inside delete booking");
        if(bookingInfo._id != null){
        Booking.remove({_id:bookingInfo._id},function(err, results){
            if (err) throw err;
            req.flash("error", "Booking Cancelled!!");
            res.redirect('/bookingform');
        });     
    }else{
        req.flash("error", "Booking Not Found");
        res.redirect('/bookingform');
        // res.locals.Message = "Booking Not Found";
    }   
    },
    GetBookingData: function(req,res){
        console.log("I am inside get booking by id");
        if(req.session.user){
        id = req.session.user._id;
        Booking.findOne({User_id:id},function(err, results){
            if (err) throw err;
            if(results!=null){
            Vehicle.findOne({_id:results.Vehicle_id},function(err,vehicle){
                console.log(res.locals.Message);
                res.render('bookingform',{booking:results,vehicle:vehicle});
            });
        }
        else{
        res.render('bookingform',{booking:{},vehicle:{}});
        }
        })  ;  
        
      }  
      else{
          res.send("UnAuthorised Access!!")
      }  
    },
}