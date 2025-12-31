const controller = require('../model/QuizAtempts_Schema');

exports.CreateData = async (req,res) => {
    try{
        const create_data = await controller.create(req.body);
        res.status(200).json({
            message:"Data created Successfully",
            data: create_data
        })
    }
    catch(err){
        console.log("Data Creation Failed:",err.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}

exports.FetchData = async (req,res) => {
    try{
        const fetch_data = await controller.findById(req.params.id);
        if(!fetch_data){
            return res.status(404).json({message:"Data not found:"});
        }
        res.status(200).json({
            message:"Data Fetched Successfully",
            data: fetch_data
        })
    }
    catch(err){
        console.log("Data Fetching failed",err.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}

exports.UpdateData = async (req,res) => {
    try{
        const update_data = await controller.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!update_data){
            return res.status(404).json({message:"Data not found:"});
        }
        res.status(200).json({
            message:"Data Update Successfully",
            data: update_data 
        })
    }
    catch(err){
        console.log("Data Updation failed:",err);
        res.status(500).json({message:"Internal Server Error"});
    }
}

exports.DeleteData = async (req,res) => {
    try{
        const delete_data = await controller.findByIdAndDelete(req.params.id);
        if(!delete_data){
            return res.status(404).json({message:"Data Not Found"});
        }
        res.status(200).json({
            message:"Data deleted Successfully",
            data: delete_data
        })
    }
    catch(err){
        console.log("Delete Failed:",err.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}