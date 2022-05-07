const router = require('express').Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//register
router.post('/register' , async (req , res)=>{
   
   try{
       // decrypt password
       const salt = await bcrypt.genSalt(10);
       const hashedPass = await bcrypt.hash(req.body.password, salt);
       
       // create new user
       const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
    });
       //save user and responds
       const user = await newUser.save();
       res.status(200).json(user);
   }catch(err){
    res.status(500).json(err);
   }
});

//login
router.post("/login", async (req,res)=>{
    try{
        //find user
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).send("Akun tidak ditemukan");

        //valid password
        const validPass = await bcrypt.compare(req.body.password, user.password);
        !validPass && res.status(400).send("Salah Password!");

        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});


module.exports  = router