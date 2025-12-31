const SubController = require('../model/subscriptions_schema');

exports.CreateSubscription = async (req,res) => {
    try{
        const create = await SubController.create(req.body);
        res.status(200).json({message:"Subscription Creaed",SubCreate: create})
    }
    catch(err){
        console.log("Subscription creation failed");
        res.status(500).json({message:"Internal Server Error"});
    }
}

exports.FetchSubscription = async (req,res) => {
    try{
        const fetch= await SubController.findById(req.params.id);
        if(!fetch){
            return res.status(404).json({message:"Detail Not Found"});
        }
        res.status(200).json({message:"Details Fetched:",FetchDetail:fetch});
    }
    catch(err){
        console.log("Fetch Failed:",err);
        res.status(500).json({message:"Internal Server Error"});
    }
}

exports.UpdateSubscription = async (req,res) => {
    try{
        const update= await SubController.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!update){
            return res.status(404).json({message:"Detail not found for updation"});
        }
        res.status(200).json({message:"Details Updated Successfully",updateDetail: update});
    }
    catch(err){
        console.log("Updation Failed:",err);
        res.status(500).json({message:"Internal Server Error"})
    }
}

exports.DeleteSubscription = async (req,res) => {
   try{
        const del = await SubController.findByIdAndDelete(req.params.id);
        if(!del){ 
            return res.status(404).json({message:"Detail not found to delete"})
        }
        res.status(200).json({message:"Details deleted successfully",delData: del});
   }
   catch(err){
        console.log("Delete error occured",err);
        res.status(500).json({message:"Internal Server Error"});
   } 
}

