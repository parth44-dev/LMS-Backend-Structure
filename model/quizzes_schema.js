const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    lesson_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lesson',   
        required: true
    },
    title: {
        type: String,
        required: [true, "Quiz title is required"]
    },
    passing_marks: {
        type: Number,
        required: [true, "Enter passing marks"]
    },
    time_limit: {
        type: Number,
        required: [true, "Enter time limit in minutes"]
    }
}, { timestamps: true }); 

module.exports = mongoose.model('Quiz', quizSchema);
