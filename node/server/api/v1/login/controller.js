

let mongoose = require('mongoose');

// let jwt = require('jsonwebtoken')
// let config = require('../../../config/config')
let ObjectId = mongoose.Schema.objectId
let logCollection = require('../register/model');
let AddCollection = require('../submitadd/model');

let loginadd = (req, res) => {
    console.log(req.body)
    logCollection.findOne({ email: req.body.email })
        .then(
            (response) => {
                /* console.log(response) */
                if (response.password == req.body.password) {
                    res.status(200).json({ status: true, message: "Successfully loggedin", user: response });
                } else {
                    res.status(200).json({ status: false, message: "Wrong Credentials" });
                }
            }
        ).catch(
            (error) => {
                res.status(500).json({ status: false, message: "Error while creating add , please again" })
            }
        )
}


let getdetails = (req, res) => {
    console.log(req)
    logCollection.findById({ _id: req.params.id })
        .then(
            (response) => {

                res.status(200).json({ status: true, message: "Successfully Fetched Details", userData: response });
            }
        ).catch(
            (error) => {
                res.status(500).json({ status: true, message: "Error While fetching Details" });
            }
        )
}
let editdetails = (req, res) => {
    // console.log(req);
    logCollection.findOneAndUpdate({ _id: req.body.id }, { $set: { "password": req.body.password } }, { new: true })
        .then(
            (response) => {
                res.status(200).json({ status: true, message: "Successfully Edited Details", userData: response });
            }
        ).catch(
            (error) => {
                res.status(500).json({ status: true, message: "Error While updating Details" });
            }
        )
}



let getUserDetails = (req, res) => {
    console.log(req);
    logCollection.findOne({ _id: req.params.id })
        .then(
            (response) => {
                res.status(200).json({ status: true, message: "Successfully Fetched Details", userData: response });
            }
        ).catch(
            (error) => {
                res.status(500).json({ status: true, message: "Error While fetching Details" });
            }
        )
}


let editUserDetails = (req, res) => {
    // console.log(req);
    logCollection.findOneAndUpdate({ _id: req.body.id }, { $set: { "password": req.body.password } }, { new: true })
        .then(
            (response) => {
                res.status(200).json({ status: true, message: "Successfully Edited Details", userData: response });
            }
        ).catch(
            (error) => {
                res.status(500).json({ status: true, message: "Error While updating Details" });
            }
        )
}


let deleteUser = (req, res) => {
    // console.log(req);
    logCollection.findOneAndRemove({ _id: req.body.id })
        .then(
            (response) => {
                res.status(200).json({ status: true, message: "Successfully Deleted Data", userData: response });
            }
        ).catch(
            (error) => {
                res.status(500).json({ status: true, message: "Error While deleting User" });
            }
        )
}

let getProfileData = (req, res) => {
    let _id = req.params.id;
    logCollection.aggregate([
        { $match : {
            /*  $or : [{ email : email },{ mobile : mobile }],
            "groups" : { $in : ["Sports","Football","baseball","Hockey","WWE","dhags","ashjsgfjd","d,jhs"] }, */
            "_id" : mongoose.Types.ObjectId(_id) 
        } },
        {
        $lookup:
            {
                from: "adds",
                localField: "_id",
                foreignField: "creatorId",
                as: "addDetails"
            }
    },
    
]).then(
    (response)=>{
        console.log(response);
        res.status(200).json({ status: true, message: "Success", userData: response });
    }
).catch(
    (err)=>{
        console.log(err);
        res.status(500).json({ status: false, message: "Error" });
    }
)




    /* AddCollection.find({ creatorId: req.params.id })
        .then(
            (addResponse) => {
                let addsData = addResponse;
                logCollection.findOne({ _id: req.params.id })
                    .then(
                        (userData) => {
                            res.status(200).json({ status: true, message: "Success", userData: userData, addDetails: addsData });
                        }
                    ).catch(
                        (err) => {
                            console.log(err);
                            res.status(500).json({ status: false, message: "Error" });
                        }
                    )
            }
        ).catch(
            (err) => {
                console.log(err);
                res.status(500).json({ status: false, message: "Error" });
            }
        ) */


}


module.exports = {
    loginadd,
    getUserDetails,
    editUserDetails,
    deleteUser,
    getProfileData
}