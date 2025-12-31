const mongoose = require('mongoose');

const CourseSection_Schema = new mongoose.Schema({
    course_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'course'
    },
    title:{
        type:String
    },
    sort_order:{
        type: Number
    }
})

module.exports = mongoose.model('CourseSection',CourseSection_Schema);