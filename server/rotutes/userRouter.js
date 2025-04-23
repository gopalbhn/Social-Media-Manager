const express = require('express');
const { User } = require('../models/userModel');
const { generateJWT, authenticateJwt } = require('../middleware/auth.middleWare');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const router =  express.Router();


router.post('/signin',async (req,res)=>{
        const {name,email,password} = req.body;
        
        if(
            [name,email,password].some((feilds)=>feilds?.trim() == "")
        ){
            res.status(400).json({message:'Some Feild are missing'})
        }

        const existedUser = await User.findOne({email});
        if(existedUser){
            res.status(400).json({message:'User With the given Email already existed'});
        }

        const user = await  User.create({
            name,
            email,
            password
        })
        const token = generateJWT(user)
        res.cookie('token',token,{
            httpOnly:true,
            sameSite:'none',
            maxAge: 24*60*60*1000 // 1 day
        })
        res.status(200).json({message:"User Created Sucessfully"})
})


router.post('/login',async (req,res)=>{
    const {email,password} = req.body;
    if(
        [email,password].some((feilds)=>feilds?.trim() == "")
    ){
        res.status(400).json({message:'Some Feild are missing'})
    }

    const user = await User.findOne({email});
    if(!user){
        res.status(400).json({message:'User With the given Email not found'});
    }

    if(user.password !== password){
        res.status(400).json({message:'Password is not correct'});
    }
    const token = generateJWT(user);
    res.cookie('token',token,{
       
        maxAge: 1*60*60*1000
    })
    res.status(200).json({message:"User Logged In  Sucessfully"})
}
)


router.get('/me',authenticateJwt, async (req,res)=>{
    console.log('me endpoint ',req.cookies.token)
    const user = await User.findOne({email:req.user})
    res
    .status(200)
    .json({
        user
    })
})

//router.get('/auth/google',passport.authenticate('google',{scope:['profile']}));

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

router.get('/auth/google/callback',passport.authenticate('google',{session:false,failureRedirect:'http:localhost:5173/login'}),(req,res)=>{
    
    const token = generateJWT(req.user)
 
    // res.json({token,user:req.user})
   
    // res.redirect('http://localhost:5173')
    res.cookie('token',token,{
        httpOnly:true,
        maxAge: 24*60*60*1000 // 1 day
    })
    res.redirect(`http://localhost:5173`);
})
module.exports = router;