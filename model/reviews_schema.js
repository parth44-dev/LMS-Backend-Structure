const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    rating: {
        type: Number,
        required: [true, "Enter Course Rating"]
    },
    review: {
        type: String,
        required: [true, "Enter Your Review"]
    }
}, { timestamps: { createdAt: true, updatedAt: false } });

module.exports = mongoose.model('Review', reviewSchema);
