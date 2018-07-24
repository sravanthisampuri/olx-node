let express=require('express')
let router = express.Router();
let logController = require('./controller')

router.post('/createAdd',logController.loginadd)
// router.get('/getdetail/:id',logController.getdetails)
// router.put('/editdetail',logController.editdetails)

router.get('/getDetails/:id',logController.getUserDetails)

router.put('/editDetails',logController.editUserDetails);

router.delete('/deleteUser', logController.deleteUser);

router.get('/getProfileDetails/:id', logController.getProfileData );


module.exports = router;
