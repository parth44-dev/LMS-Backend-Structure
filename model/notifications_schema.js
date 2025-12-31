const mongoose = require('mongoose');

const notifications_schema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type:String
    },
    message:{
        type:String
    },
    is_read:{
        type:Boolean,
        default: false
    }
}, {timestamps:{createdAt:true,updatedAt:false}})

module.exports = mongoose.model('notifications',notifications_schema);