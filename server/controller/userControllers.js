const asyncHandler = require('express-async-handler');
const User = require('../models/UserModel');
const generateToken = require('../utils/generateToken');

// register user controller
const registerUser = asyncHandler( async(req,res) => {
    const {name,email,password,mobileNumber,country,gender,age,weight,height,refferalCode,dateOfBirth} = req.body;

    // check if user already exists
    const userExists = await User.findOne({email});

    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    const newUser = await User.create({
        name,email,password,mobileNumber,country,gender,age,weight,height,refferalCode,dateOfBirth
    });

    let newD = await User.findOneAndUpdate({email},
        {
            $push:{
                userStats:{
                    "date":"0",
                    "calories": 0
                  }
            }
        },{
            new:true
        })

        newD = await User.findOneAndUpdate({email},
            {
                $push:{
                    userTime:{
                        "date":"0",
                        "time": 0
                      }
                }
            },{
                new:true
            })

    // if newUser created
    if(newD) {
        res.status(201).json({
            _id: newD._id,
            name: newD.name,
            email: newD.email,
            gender: newD.gender,
            mobileNumber: newD.mobileNumber,
            country: newD.country,
            age: newD.age,
            weight: newD.weight,
            height: newD.height,
            refferalCode: newD.refferalCode,
            dateOfBirth: newD.dateOfBirth,
            token: generateToken(newD._id),
            userStats:newD.userStats,
            userTime: newD.userTime
        })
    } else{
        res.status(400)
        throw new Error("Error creating new user")
    }


    res.json({
        name,
        email,
        password,
        mobileNumber,
        country,
        gender,
        age,
        weight,
        height,
        refferalCode,
        dateOfBirth
    })
})


// login user controller
const loginUser = asyncHandler( async(req,res) => {
    const {email,password} = req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            gender: user.gender,
            mobileNumber: user.mobileNumber,
            country: user.country,
            age: user.age,
            weight: user.weight,
            height: user.height,
            refferalCode: user.refferalCode,
            dateOfBirth: user.dateOfBirth,
            token: generateToken(user._id),
            coins: user.coins,
            calories: user.calories,
            timeToday: user.timeToady
        })
    } else{
        res.status(400);
        throw new Error('invalid email or password')
    }
})

module.exports = {
    registerUser,
    loginUser
}