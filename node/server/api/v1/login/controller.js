// let mongoose = require('mongoose');
// let jwt = require('jsonwebtoken')
// let config = require('../../../config/config')

let logCollection = require('./model');

let loginadd =(req,res)=>{
    logCollection.findOne(req.body)
        .then(
            (response)=>{
                res.status(200).json({ status : true , message :"Success"  , addDetails:response})
            }
        ).catch(
            (error)=>{
                res.status(500).json({ status : false , message :"Error while creating add , please again"   })
            }
        )
}

module.exports = {
    loginadd
}