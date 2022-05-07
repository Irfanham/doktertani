const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//create post
router.post("/", async (req,res)=>{
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
    }

});

//update post

router.put("/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await Post.updateOne({$set: req.body});
            res.status(200).json("Post berasil diperbarui");
        }else{
            res.status(403).json("Hanya dapat mengupdate post yang kamu buat");
        }
    }catch(err){
        res.status(500).json(err);
    }

});

//delete post

router.delete("/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await Post.deleteOne();
            res.status(200).json("Post berasil dihapus");
        }else{
            res.status(403).json("Hanya dapat menghapus post yang kamu buat");
        }
    }catch(err){
        res.status(500).json(err);
    }

});

//like post

router.put("/:id/like", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes: req.body.userId}});
            res.status(200).json("Menyukai postingan ini");
        }else{
            await post.updateOne({$pull: {likes: req.body.userId}});
            res.status(200).json("Tidak menyukai postingan ini");
        }

    }catch(err){
        res.status(500).json(err);
    }

});

//get post
router.get("/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);

    }catch(err){
        res.status(500).json(err);
    }
});

//get timeline post
router.get("/timeline/:userId", async (req,res)=>{
    let postArray = [];
    try{
       const currentUser = await User.findById(req.params.userId);
       const userPosts = await Post.find({ userId: currentUser._id});
       const friendPosts = await Promise.all(
           currentUser.followings.map((friendId)=>{
               return Post.find({userId: friendId});
           })
       );
       res.status(200).json(userPosts.concat(...friendPosts));

    }catch(err){
        res.status(500).json(err);
    }
});

//get user's all post
router.get("/profile/:username", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.params.username });
      const posts = await Post.find({ userId: user._id });
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;