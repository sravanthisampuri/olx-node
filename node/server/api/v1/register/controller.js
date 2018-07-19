let mongoose = require('mongoose');
/* let UserService = require('./service'); */
// let jwt = require('jsonwebtoken');
let config = require('../../../config/config');

let registerCollection = require('./model')

<<<<<<< HEAD
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
=======
let registeradd = (req, res) => {
    console.log(req.body)
    var reg=new registerCollection(req.body)
    reg.save(req.body)
        .then(
            response => {
                console.log('resp',response);
                res.status(200).json({ status: true, message: "Success", addDetails: response })
            }
        )
        .catch(
            error => {
                console.log('err',error);
                res.status(500).json({ status: false, message: "Error while creating add , please again" })
            }
        )
>>>>>>> 59063d25b2181a1a5aa13a26d459220b9c7a2e56

}



module.exports = {
    registeradd
}