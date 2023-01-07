const asyncHandler = require('express-async-handler');
const User = require('../models/UserModel');


const updateCalorie = asyncHandler(async(req,res) => {

   

})




const updateTime = asyncHandler(async(req,res) => {

     
})



const updateCoins = asyncHandler(async(req,res) => {

    try{
        const email = req.params.email
        let val = req.params.val
        
        const data = await User.findOne({email})
        val = parseInt(val) + parseInt(data.coins)
        
        const newData = await User.findOneAndUpdate({email},{coins:val},{new:true})
    
        res.json(newData)
    }catch(error) {
        res.status(400);
        throw new Error('Error increasing coins')
    }

})


const getUserData = asyncHandler(async(req,res) => {
   
    try{
        const email = req.params.email
        const userData = await User.find({email})
        res.json(userData)
    }catch(error) {
        res.status(400);
        throw new Error('Error fetching user')
    }

})

module.exports = {
    updateCoins,
    getUserData,
    updateCalorie,
    updateTime
}