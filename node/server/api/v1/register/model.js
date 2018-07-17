let mongoose = require('mongoose');
let  objectId = mongoose.Schema.objectId;

let registerDetails = new mongoose.Schema({
    email : String,
    password : Number,
    conpassword : Number,
    name:String,
    // createId : objectId  

})

let registerModel = mongoose.model('users',registerDetails);
module.exports = registerModel;