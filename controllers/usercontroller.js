var mongoose = require('mongoose'), User = mongoose.model('user');


module.exports={
    GetUserById: function(req,res){
        console.log("I am inside get User by id");
        if(req.session.user){
        id = req.session.user._id;
        User.findOne({_id:id},function(err, results){
            if (err) throw err;
            res.render('myprofile',{editUser:results});
        })  ;  
      }  
      else{
          res.send("UnAuthorised Access!!")
      }  
    },
    SaveUser: function(req,res){
        console.log("I am inside save user");
        var userInfo = req.body;
        User.create(userInfo, function(err, result){
            if (err) {res.render("Error inserting data")}
            req.session.user=result;
            
            res.redirect('/index');
        })
        
    },
    EditUser: function(req,res){
        console.log("I am inside edit user");
        var userInfo = req.body;
        User.findOneAndUpdate({_id:userInfo._id}, userInfo,{new: true}, function(err, result){
            if (err) {res.render("Error inserting data")}
            req.session.user=result;
            
            res.redirect('/index');
        })
        
    },
    LoginUser: function(req,res){
        console.log("I am inside login");
        var loginInfo = req.body;
        User.findOne(loginInfo, function(err, results){
            if (err) {res.render("Error inserting data")}
            if(results!=null){
            req.session.user=results;
            res.locals.user = req.session.user;
            
            res.redirect('/index');
            }
            else{
                res.render('SignIn', { ErrorMessage: "Email or Password Incorrect!!" });
            }
        });
        
    },
}