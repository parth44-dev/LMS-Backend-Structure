const mongoose = 
require('mongoose');

const dbconnect = async() => {
    try{
            await mongoose.connect('mongodb://127.0.0.1:27017/lmstables');
            console.log("MongoDb Connected Successfully:-");
    }
    catch(err){
            console.log("Connection Failed:-",err.message);
    }
}

module.exports = dbconnect;