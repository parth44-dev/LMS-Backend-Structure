const mongoose = require('mongoose');

const course_schema = new mongoose.Schema({
    institute_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'institute'
    },
    trainer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: [true, "Enter Title"]
    },
    slug: {
        type: String
    },
    thumbnail: {
        type: String
    },
    description: {
        type: String,
        minlength: [5, "Enter at least 5 characters"],
        maxlength: [15, "Enter no more than 15 characters"]
    },
    price:{
        type:String,
        required:[true,"Enter Price"]
    },
    discount_price:{
        type:String,
        required:[true,"Enter Discounted Price"]
    },
    duration:{
        type:String,
        required:[true,"Enter discount duration"]
    },
    level:{
        type:String,
        enum:{
            values:['beginner','intermediate','advanced'],
            message: props => `${props.value} is not a valid value.Select from Beginner,intermediate and advanced`
        }
    },
    language:{
        type:String
    },
    status:{
        type:String,
        enum:{
            values:['draft','published','archived'],
            message: props => `${props.value} is invalid. Select from draft,published and archived`
        }
    },
},{timestamps:{createdAt:true,updatedAt:false}})

module.exports = mongoose.model('course',course_schema);