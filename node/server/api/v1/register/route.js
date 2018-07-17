let express=require('express')
let router=express.Router();

let registerController = require('./controller')

router.use('/userinfo',registerController.registeradd)


module.exports=router;