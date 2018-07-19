let express=require('express')
let router = express.Router();
let logController = require('./controller')

router.post('/createAdd',logController.loginadd)
router.get('/getdetail/:id',logController.getdetails)
router.put('/editdetail',logController.editdetails)



module.exports = router;
