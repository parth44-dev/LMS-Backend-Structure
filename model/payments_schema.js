const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',   // ✅ match your actual User model name
        required: true
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course', // ✅ match your actual Course model name
        required: true
    },
    amount: {
        type: mongoose.Schema.Types.Decimal128,
        required: [true, "Amount is required"]
    },
    payment_method: {
        type: String,
        enum: {
            values: ['UPI', 'Net Banking', 'Cash', 'Debit Card', 'Credit Card'],
            message: props => `${props.value} is an invalid value. Select from UPI, Net Banking, Credit Card, Debit Card, or Cash`
        },
        required: [true, "Payment method is required"]
    },
    transaction_id: {
        type: String,
        required: [true, "Transaction Id is required"],
        unique: true  
    },
    payment_status: {
        type: String,
        enum: {
            values: ['success', 'failed', 'pending'],
            message: props => `${props.value} is invalid. Select from success, failed, or pending`
        },
        default: 'pending'
    }
}, { timestamps: { createdAt: 'paid_at', updatedAt: false } }); 

module.exports = mongoose.model('Payment', paymentSchema);
