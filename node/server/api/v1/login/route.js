let express=require('express')
let router = express.Router();
let logController = require('./controller')

router.post('/createAdd',logController.loginadd)



module.exports = router;
