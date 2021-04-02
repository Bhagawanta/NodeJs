const express = require('express');
const router = express.Router();
const User = require('../models/User')
// Get All User 
router.get('/',async (req,res)=>{
    try{
        const data = await User.find();
        res.json(data);
    }catch(err){
        res.json({message:err})
    }
    console.log("Welcome to node......!")
});

// Add User 
router.post('/',async (req,res)=>{
    const user = new User({
        username:req.body.username,
        password:req.body.password
    });
    try{
    const savedData =await user.save()
    res.json(savedData);
    }catch(err){
        res.json({message:err});
    }

});

// Get User By Id 

router.get('/:userId',async (req,res)=>{
    try{
     const data = await User.findById(req.params.userId)
     res.json(data);

    }catch(err){
        res.json({message:err})
    }
});

// delete user by id 

router.delete('/:userId',async (req,res) =>{
 try{
    const data = await User.remove({_id:req.params.userID});
    res.json(data);
 }catch(err){
     res.json({message:err});
 }
});

// update user data 

router.patch('/:userId',async (req,res) =>{
try{
    const updateddata = await User.updateOne({_id:userID},{ $set :{ username:req.params.username,password:req.params.password}});
    res.json(updateddata);

}catch(err){
    res.json({message:err});
}
});
module.exports = router;