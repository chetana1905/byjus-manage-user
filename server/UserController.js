const req = require('express/lib/request');
const res = require('express/lib/response');
const User = require('./UserModel');

exports.createUser = async(req, res, next) => {
    // console.log(req.body.joining_date);
    
    const data  = {... req.body};
    data.joining_date = new Date();
    try{
        const create = await User.create(data);
        const all_users = await User.find();
        res.status(200).json({success:true , users : all_users});
    }catch(err){
        if(err.code == '11000'){
            res.status(200).json({success : false , message : "Email must be unique"});
        }
    }
 
}


exports.getUsers = async(req, res, next) =>{
    try{
        const users = await User.find();
        res.status(200).json({success : true, users : users});
    }catch(err){
        console.log(err);
        res.status(200).json({success : false , message : err.message})
    }
}


exports.deleteUser = async(req, res, next) => {
    try{
        const deleted = await User.deleteOne({id : req.params.user_id});
        const users = await User.find();
        res.status(200).json({success : true, users : users});
    }catch(err){
        res.status(200).json({
            success : false,
            message : "Not able to delete user"
        })
    }
}