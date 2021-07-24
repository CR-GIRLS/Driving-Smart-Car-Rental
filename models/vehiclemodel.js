var mongoose = require('mongoose');

var vehicleSchema = new mongoose.Schema(
    {
        Vehicle_type_id:{type:Number},
        Name:{type:String},
        Model:{type:Number},
        Maker:{type:String},
        Color:{type:String},
        Description:{type:String},
        Price_Daily:{type:Number},
        Price_Weekly:{type:Number},
        Price_Monthly:{type:Number},
        Main_features:{type:String},
        Seating_capacity:{type:Number},
        Transmission:{type:String},
        OnOffer:{type:Boolean}
    }
);
mongoose.model('vehicle',vehicleSchema);