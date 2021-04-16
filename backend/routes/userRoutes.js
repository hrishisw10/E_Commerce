const router = require('express').Router();
const User = require('../models/userModel');

router.post('/api/register',async (req,res) =>{
    console.log('recieved data');
    const newUser = new User(req.body);

    if(newUser.password!=newUser.password2){
        return res.status(400).json({message:'password mismatched'});
    }

    User.findOne({email:newUser.email},(err,user)=>{
        if(user) return res.status(400).json({ auth : false, message :"email already exits"});
    })
    
    await newUser.save()
    res.status(200).json({message:"Successfully saved"})

});

router.post('/api/login',(req,res) =>{
    User.findOne({'email':req.body.email},(err,user)=>{
        if(!user) return res.json({isAuth:false,message:'Email not found, recheck entered email or try signing up!'});
        if(user.password==req.body.password){
            return res.status(200).json({isAuth:true,message:"Logged in successfully"});
        }
        else return res.status(400).json({message:"Password not matched"})
    })
})

module.exports = router;