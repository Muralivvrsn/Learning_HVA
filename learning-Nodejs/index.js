const express = require('express');
const router = express.Router();
const newPosts = require("./mongoose");
router.get("/post",function(req,res){
    res.send({type: 'GET'});
})
router.post('/post',function(req,res){
    newPosts.create(req.body).then(function(newPost){
        res.send(newPost);
    });
});
router.put('/post/:id',function(req,res){
    res.send({type: "PUT"});
});
router.delete("/post/:id",function(req,res){
    res.send({type: "DELETE"});
})

module.exports = router;