const mongoose = require('mongoose')

const certificates_schema = new mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    course_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'course'
    },
    certificate_no:{
        type:String,
        required:[true,"Certificate number is a required field"],
        unique: [true,"Certificate Number is always unique"]
    },
    issue_date:{
        type: Date,
        required:[true,"Date of issue is required"]
    },
    pdf_file:{
        type: String
    }
})

module.exports = mongoose.model('certificates',certificates_schema);