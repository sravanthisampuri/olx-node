let mongoose = require('mongoose');
let  objectId = mongoose.Schema.objectId;

let loginDetails = new mongoose.Schema({
    email : String,
    password : Number,
    // createId : objectId  

})

let logModel = mongoose.model('ADDS',loginDetails);
module.exports = logModel;
