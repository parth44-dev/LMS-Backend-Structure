const mongoose = require('mongoose');

const subscriptions_schema = new mongoose.Schema({
    plan_name: {
        type: String,
        required: [true, "Plan name is required"]
    },
    price: {
        type: mongoose.Schema.Types.Decimal128,
        required: [true, "Enter Price of the Course"]
    },
    duration_days: {
        type: Number,   
        required: true
    },
    status: {
        type: String,
        enum: {
            values: ['Active', 'Inactive'],
            message: props => `${props.value} is invalid value. Select from Active or Inactive`
        },
        default: 'Active'
    }
});

module.exports = mongoose.model('subscriptions', subscriptions_schema);
