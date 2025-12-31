const mongoose = require('mongoose');

const QuizAttemptSchema = new mongoose.Schema({
    quiz_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',   
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',   
        required: true
    },
    score: {
        type: Number,
        required: [true, "Enter Score, it is required"]
    },
    is_passed: {
        type: Boolean,
        default: true
    }
}, { timestamps: { createdAt: 'attempted_at', updatedAt: false } });

module.exports = mongoose.model('QuizAttempt', QuizAttemptSchema);
