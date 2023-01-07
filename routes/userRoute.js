const router = require('express').Router();
const {registerUser, loginUser} = require('../controller/userControllers')


router.route('/register').post(registerUser)

router.route('/login').post(loginUser)

module.exports = router;