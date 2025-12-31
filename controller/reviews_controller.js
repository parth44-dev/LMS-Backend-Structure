const ReviewsController = require('../model/reviews_schema');

exports.CreatReview = async (req,res) => {
    try{
        const create = await ReviewsController.create(req.body);
        res.status(200).json({message:"Reviews Created",Created_User : create})
    }   
    catch(err){
        console.log("Reviews Creation Failed",err);
        res.status(500).json("Internal Server Error");
    } 
}

exports.FetchReview = async (req,res) => {
    try{
        const fetch = await ReviewsController.findById(req.params.id);
        if(!fetch){
            return res.status(404).json({Message:"Detail not found"});
        }
        res.status(200).json({message:"Reviews Found"});
    }
    catch(err){
        console.log("Data Fetch failed:",err);
        res.status(500).json({message:"Internal Server Error"});
    }
}

exports.UpdateReview = async (req,res) => {
    try{
        const update = await ReviewsController.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!update){
            return res.status(404).json({message:"Data not found to update"})
        }
        res.status(200).json({message:"Reviews Updates"});
    }   
    catch(err){
        console.log("Reviews Update failed:",err);
        res.status(500).json({message:"Internal Server Error"})
    }
}

exports.DeleteReview = async(req,res) => {
        try{
        const delete_user = await ReviewsController.findByIdAndDelete(req.params.id);
        if(!delete_user){
            return res.status(404).json({message:"Data not found to delete"})
        }
        res.status(200).json({message:"Reviews deleted"});
    }   
    catch(err){
        console.log("Reviews deletion failed:",err);
        res.status(500).json({message:"Internal Server Error"})
    }
}