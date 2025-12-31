const UserController = require('../model/user_schema');

exports.CreatUser = async (req,res) => {
    try{
        const create = await UserController.create(req.body);
        res.status(200).json({message:"User Created",Created_User : create})
    }   
    catch(err){
        console.log("User Creation Failed",err);
        res.status(500).json("Internal Server Error");
    } 
}

exports.FetchUser = async (req,res) => {
    try{
        const fetch = await UserController.findById(req.params.id);
        if(!fetch){
            return res.status(404).json({Message:"Detail not found"});
        }
        res.status(200).json({message:"User Found"});
    }
    catch(err){
        console.log("Data Fetch failed:",err);
        res.status(500).json({message:"Internal Server Error"});
    }
}

exports.UpdateUser = async (req,res) => {
    try{
        const update = await UserController.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!update){
            return res.status(404).json({message:"Data not found to update"})
        }
        res.status(200).json({message:"User Updates"});
    }   
    catch(err){
        console.log("User Update failed:",err);
        res.status(500).json({message:"Internal Server Error"})
    }
}

exports.DeleteUser = async(req,res) => {
        try{
        const delete_user = await UserController.findByIdAndDelete(req.params.id);
        if(!delete_user){
            return res.status(404).json({message:"Data not found to delete"})
        }
        res.status(200).json({message:"User deleted"});
    }   
    catch(err){
        console.log("User deletion failed:",err);
        res.status(500).json({message:"Internal Server Error"})
    }
}