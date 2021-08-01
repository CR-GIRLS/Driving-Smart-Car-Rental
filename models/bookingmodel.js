var mongoose = require('mongoose');

var bookingSchema = new mongoose.Schema(
    {
        Vehicle_id:{type:String},
        User_id:{type:String},
        FullName:{type:String},
        Pickup_date:{type:Date},
        Dropoff_date:{type:Date},
        Total_price:{type:Number},
        Driving_licence_path:{type:String}
    }
);
mongoose.model('booking',bookingSchema);