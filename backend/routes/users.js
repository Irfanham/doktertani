const User = require("../models/User");
const router = require('express').Router();
const bcrypt = require('bcrypt');
// update user
router.put('/:id' , async (req , res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }catch(err){
                return res.status(500).json(err);
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            });
            res.status(200).json("Akun berhasil diperbarui");
        }catch(err){
            return res.status(500).json(err);
        }
    }else{
        return res.status(403).json("Input sesuai petunjuk");
    }
});

//delete user
router.delete('/:id' , async (req , res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Akun berhasil dihapus");
        }catch(err){
            return res.status(500).json(err);
        }
    }else{
        return res.status(403).json("Hanya akun anda yang bisa dihapus");
    }
});

//get user
router.get("/", async (req,res)=>{
    const userId = req.query.userId;
    const username = req.query.username;
    try{
        const user = userId
        ? await User.findById(userId)
        : await User.findOne({username: username});
        const {password,updateAt, ...other} = user._doc
        res.status(200).json(other);
    }catch(err){
        return res.status(500).json(res);
    }
});

//follow user
router.put("/:id/follow", async(req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push: {followers: req.body.userId}});
                await currentUser.updateOne({$push: {followings: req.params.id}});
                res.status(200).json("User berhasil difollow");
            }
        }catch(err){
            res.status(403).json("Kamu sudah follow user ini");
        }
    }else{
        res.status(403).json("Tidak bisa follow diri sendiri");
    }
});

//unfollow user
router.put("/:id/unfollow", async(req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull: {followers: req.body.userId}});
                await currentUser.updateOne({$pull: {followings: req.params.id}});
                res.status(200).json("User berhasil diunfollow");
            }
        }catch(err){
            res.status(403).json("Kamu follow user ini");
        }
    }else{
        res.status(403).json("Tidak bisa unfollow diri sendiri");
    }
});

module.exports  = router