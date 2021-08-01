var mongoose = require('mongoose'), Vehicle = mongoose.model('vehicle')

module.exports={
    GetAll: function(req,res){
        console.log("I am inside get all the Vehicle");
        Vehicle.find({},function(err, results){
            if (err) throw err;
            res.render('Aboutus.ejs');
        });        
    },
    GetVehiclesOnOffer: function(req,res){
        console.log("I am inside vehicles on offer");
        Vehicle.find({'OnOffer':true},function(err, results){
            if (err) throw err;
            res.render('index',{vehicles:results});
        });        
    },
    GetCars: function(req,res){
        console.log("I am inside get cars");
        Vehicle.find({'Vehicle_type_id':1},function(err, results){
            if (err) throw err;
            res.render('car',{cars:results});
        });        
    },
    GetSUVs: function(req,res){
        console.log("I am inside get cars");
        Vehicle.find({'Vehicle_type_id':2},function(err, results){
            if (err) throw err;
            res.render('suv',{suvs:results});
        });        
    },
    GetVans: function(req,res){
        console.log("I am inside get cars");
        Vehicle.find({'Vehicle_type_id':3},function(err, results){
            if (err) throw err;
            res.render('van',{vans:results});
        });        
    },
    GetVehicleById: function(req,res){
        if(req.session.user){
        theId= req.query.id;
        console.log("I am inside get car by id");
        Vehicle.findOne({'_id':theId},function(err, results){
            if (err) throw err;
            res.render('booking',{vehicle:results});
        });     
    }
    else{
        res.render('booking',{vehicle:{},message:"You Can Not Book. Please Login First."})
    }   
    }
}