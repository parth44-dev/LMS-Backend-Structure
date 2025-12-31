const mongoose = require('mongoose');

const LessonProgress_Schema = new mongoose.Schema({
    enrollment_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'enrollments'
    },
    lesson_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'lesson'
    },
    progress_percent:{
        type:Number,
        required:[true,"Enter persentage of Completion:"]
    }
},{timestamps:{createdAt: 'completedAt', updatedAt: false}})

module.exports = mongoose.model('LessonProgress',LessonProgress_Schema);