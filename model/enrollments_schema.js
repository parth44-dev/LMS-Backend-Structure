const mongoose = require('mongoose');

const enrollments_schema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    course_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'course'
    },
    enroll_date:{
        type: Date
    },
    expiry_date:{
        type: Date
    },
    status:{
        type:String,
        enum:{
            values:['active','expired','cancelled'],
            message: props => `${props.value} is not a valid value. Select from active,expired or cancelled.`
        }
    }
})

module.exports = mongoose.model('enrollments',enrollments_schema);