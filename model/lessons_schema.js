const mongoose = require('mongoose');

const lesson_schema = new mongoose.Schema({
    section_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'CourseSection'
    },
    title:{
        type:String
    },
    lesson_type:{
        type:String,
        required: [true,"Enter Lesson Type"],
        enum:{
            values:['video','pdf','text','quiz'],
            message: props => `${props.value} is invlaid. Select from video,pdf,text and quiz`
        }
    },
    video_url:{
        type:String
    },
    content:{
        type:String
    },
    duration:{
        type:String
    },
    sort_order:{
        type:Number
    },
    is_free_preview:{
        type:Number
    }
})

module.exports = mongoose.model('lesson',lesson_schema);