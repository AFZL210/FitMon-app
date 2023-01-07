const router = require('express').Router();
const {updateCoins,updateCalorie,updateTime} = require('../controller/updateCOntroller.js')


router.route('/coin/:email/:val').post(updateCoins)

router.route('/calorie/:email/:val/:date').post(updateCalorie)


router.route('/time/:email/:val/:date').post(updateTime)


module.exports = router;