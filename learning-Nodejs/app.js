
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(require('body-parser').json());





app.use('/api',require("./index"));
app.listen(3000,function(){
    console.log("listening to port 3000....")
});
