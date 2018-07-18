let express=require('express')
let router = express.Router();
let logController = require('./controller')

router.post('/createAdd',logController.loginadd)

router.get('/getDetails/:id',logController.getUserDetails)

router.put('/editDetails',logController.editUserDetails);

router.delete('/deleteUser', logController.deleteUser);



module.exports = router;
