const mongoose = require('mongoose');

const institute_schema = new mongoose.Schema({
    institute_name:{
        type:String,
        required:[true,"Institute Name is required"]
    },
    logo:{
        type:String,
        required:[true,"Institue Logo required"]
    },
    email:{
        type:String,
        required:[true,"Enter Institue Email Address"],
        validate:{
            validator:function(value){
                return /^\S+@\S+\.\S+$/.test(value);
            },
            message:"Please Enter a Valid Email Address"
        }
    },
    mobile:{
        type:String,
        required:[true,"Enter Mobile Number of Institute"],
        validate:{
            validator:function(value){
                return /^[6-9]\d{9}$/.test(value);
            },
            message:"Enter a Valid 10 Digit Indian Mobile Number"
        }
    },
    address:{
        type:String,
        required:[true,"Address is required"]
    },
    status:{
        type:String,
        required:[true,"Stutus required of the institute"],
        enum:{
            values:['active','inactive'],
            message: props => `${props.value} is not a valid status. Select from active or inactive`
        }
    }
} ,{timestamps:{createdAt:true,updatedAt:false}})

module.exports = mongoose.model('institute',institute_schema);