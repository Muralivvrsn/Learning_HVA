const mongoose = require('mongoose');
const schema = mongoose.Schema;
const mySchema = new schema({
    name: {
        type: String,
        required: [true,"Name field is required"]
    },
    rank:{
        type: String,

    },
    available:{
        type: Boolean,
        default: false
    }
});
const myModel = mongoose.model('myCollection',mySchema);


module.exports = myModel;
