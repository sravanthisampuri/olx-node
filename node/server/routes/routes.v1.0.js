let express = require('express');
let router = express.Router();

let loginRouter = require('../api/v1/login/route');
let registerRouter = require('../api/v1/register/route')

router.use('/create',loginRouter)
router.use('/udetails',registerRouter)

module.exports = router;