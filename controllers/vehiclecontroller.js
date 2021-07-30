var mongoose = require('mongoose'), Vehicle = mongoose.model('vehicle')

module.exports={
    GetAll: function(req,res){
        console.log("I am inside get all the Vehicle");
        Vehicle.find({},function(err, results){
            if (err) throw err;
            res.render('Aboutus.ejs');
        })        
    },
    GetVehiclesOnOffer: function(req,res){
        console.log("I am inside vehicles on offer");
        Vehicle.find({'OnOffer':true},function(err, results){
            if (err) throw err;
            res.render('index',{vehicles:results});
        })        
    },
    GetCars: function(req,res){
        console.log("I am inside get cars");
        Vehicle.find({'Vehicle_type_id':1},function(err, results){
            if (err) throw err;
            res.render('car',{cars:results});
        })        
    },
    GetSUVs: function(req,res){
        console.log("I am inside get cars");
        Vehicle.find({'Vehicle_type_id':2},function(err, results){
            if (err) throw err;
            res.render('suv',{suvs:results});
        })        
    },
    GetVans: function(req,res){
        console.log("I am inside get cars");
        Vehicle.find({'Vehicle_type_id':3},function(err, results){
            if (err) throw err;
            res.render('van',{vans:results});
        })        
    },
    GetCarById: function(id){
        console.log("I am inside get car by id");
        Vehicle.find({'_id':id},function(err, results){
            if (err) throw err;
            return results;
        })        
    }
}