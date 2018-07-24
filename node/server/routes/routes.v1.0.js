let express = require('express');
let router = express.Router();

let loginRouter = require('../api/v1/login/route');
let registerRouter = require('../api/v1/register/route')
let submitRouter = require('../api/v1/submitadd/route')


router.use('/create',loginRouter)
router.use('/udetails',registerRouter)
/* router.use('/add',submitRouter) */
/* router.get('/getDetails/:id',loginRouter) */


module.exports = router;