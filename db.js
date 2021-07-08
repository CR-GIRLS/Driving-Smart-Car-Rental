const mongoClient = require('mongodb').MongoClient;

const db_url = "mongodb+srv://vahidadb:vahida@123@cluster0.zwipe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const database_name = "DriveSmartCarRental";

module.exports.GetAllUsersData = function (){
    return new Promise((resolve, reject)=>{
        mongoClient.connect(db_url,{ useUnifiedTopology: true },function(err,dbserver){
            if(err) throw err;
            var mydb = dbserver.db(database_name);
            mydb.collection('users').find({}).toArray(function(err,results){
                // console.log(results);
                return resolve(results);
                
            });
        });
    });
    
}