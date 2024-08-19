const express=require('express')
const mongoose=require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/Employee')


const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/student").then((e)=>{
    console.log("Connected")
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then((user) => {
            if (user) {
                console.log("User found");
                res.status(200).send("Login successful");
            } else {
                console.log("User not found");
                res.status(404).send("User not found");
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Internal server error");
        });
});




app.listen(3001,()=>{

    console.log("server is running");
    
})