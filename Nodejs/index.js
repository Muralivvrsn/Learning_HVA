const fs = require("fs");
const file = fs.readFileSync("app.txt", "utf8");
console.log(file);
fs.unlink('app.txt',function(err,data){
    console.log(data);
});