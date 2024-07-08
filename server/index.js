require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose')
let cors = require('cors');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware')
const PORT = 5000 || process.env.PORT;
const  hostname = "0.0.0.0";

// User Route
const userRoute = require('./routes/userRoute');
const updateRoute = require('./routes/updateRoute')
const userData = require('./routes/userData')

app.use(cors())
app.use(express.json())

//const uri = process.env.ATLAS_URI;

mongoose.connect('mongodb+srv://AFZL210:vkMdjrTWgHusBEtx@cluster0.jsq8cav.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("connected to server")
}).catch((e) => console.log(e))


// Routes
app.get('/api/check',(req,res) => {
    res.json('API is running fine')
})


app.use("/api/user",userRoute)

app.use('/api/update',updateRoute)

app.use('/api/userdata',userData)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT,hostname,(req,res) => {
    console.log(`server listening at port : ${PORT}`);
})