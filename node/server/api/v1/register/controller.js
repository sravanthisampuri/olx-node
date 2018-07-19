let mongoose = require('mongoose');
/* let UserService = require('./service'); */
// let jwt = require('jsonwebtoken');
let config = require('../../../config/config');

let registerCollection=require('./model')

let registeradd = (req,res)=>{
    console.log(req.body)
    registerCollection.create(req.body)
    .then(
        (response)=>{
            res.status(200).json({ status : true , message :"Success"  , addDetails:response})
        }
    )
    .catch(
        (error)=>{

            res.status(500).json({ status : false , message :"Error while creating add , please again"   })
        }
    )

}

module.exports ={
    registeradd
}