let mongoose = require('mongoose');
let  objectId = mongoose.Schema.objectId;


let registerDetails = new mongoose.Schema({
    email : String,
    password : String,
    conpassword : String,
    name:String
})

let registerModel = mongoose.model('users',registerDetails);
module.exports = registerModel;