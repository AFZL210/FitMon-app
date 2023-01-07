const router = require('express').Router();
const {getUserData} = require('../controller/updateCOntroller.js')


router.route('/:email').get(getUserData)



module.exports = router;