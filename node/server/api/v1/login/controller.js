// let mongoose = require('mongoose');
// let jwt = require('jsonwebtoken')
// let config = require('../../../config/config')

let logCollection = require('../register/model');

let loginadd =(req,res)=>{
    console.log(req.body)
    logCollection.findOne({email:req.body.email})
        .then(
            (response)=>{
                /* console.log(response) */
                if(response.password == req.body.password){
                    res.status(200).json({ status : true , message :"Successfully loggedin" , user :response   }); 
                }else{
                    res.status(200).json({ status : false , message :"Wrong Credentials"   });  
                }
            }
        ).catch(
            (error)=>{
                res.status(500).json({ status : false , message :"Error while creating add , please again"   })
            }
        )
}

let getdetails=(req,res)=>{
console.log(req)
logCollection.findById({_id:req.params.id})
.then(
    (response)=>{

        res.status(200).json({ status : true , message :"Successfully Fetched Details" , userData :response   });
    }
).catch(
    (error)=>{
        res.status(500).json({ status : true , message :"Error While fetching Details"}); 
    }
)
}
let editdetails = (req,res)=>{
    // console.log(req);
        logCollection.findOneAndUpdate({_id:req.body.id},{$set:{ "password":req.body.password }},{new:true})
        .then(
            (response)=>{
                res.status(200).json({ status : true , message :"Successfully Edited Details" , userData :response   }); 
            }
        ).catch(
            (error)=>{
                res.status(500).json({ status : true , message :"Error While updating Details"}); 
            }
        )
    }

module.exports = {
    loginadd,
    getdetails,
    editdetails
}