const express = require('express');
const router = express.Router();
const user = require("../DataBase/user");

// Registration Page
router.get('register',function(req,res){
    document.write("error")
    res.render("./controls/register")
});

// Log in Page
router.get('login',function(req,res){
    res.render("./controls/login");
})

// User page after log in
router.get('user',function(req,res){
    user.findOne({password:req.query.psw}).then((user)=>{
        res.render("./controls/profile",{data:user})
    })
})

//User page after registration
router.post('user',function(req,res){
    console.log(req.body)
    user.create({
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        number:req.body.number,
        password:req.body.pwd,
    }).then((userDetails)=>{
        
        res.render("./controls/profile",{data:userDetails});
    })
})


module.exports = router;