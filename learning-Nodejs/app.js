
const express = require('express');
const app = express();
app.use('/api',require("./index"));
app.listen(process.env.port || 3000,function(){
    console.log("listening to port 3000....")
});
