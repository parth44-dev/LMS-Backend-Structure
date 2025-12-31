const mongoose = require('mongoose');

const QuizQuestionSchema = new mongoose.Schema({
    quiz_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',   // ✅ must match your Quiz model name
        required: true
    },
    question: {
        type: String,
        required: [true, 'Enter question']
    },
    option_a: {
        type: String,
        required: [true, 'Enter Option A']
    },
    option_b: {
        type: String,
        required: [true, 'Enter Option B']
    },
    option_c: {
        type: String,
        required: [true, 'Enter Option C']
    },
    option_d: {
        type: String,
        required: [true, 'Enter Option D']
    },
    correct_option: {
        type: String,
        enum: ['A', 'B', 'C', 'D'],   
        required: [true, 'Correct Option is required']
    }
}, { timestamps: true });

module.exports = mongoose.model('QuizQuestion', QuizQuestionSchema);
