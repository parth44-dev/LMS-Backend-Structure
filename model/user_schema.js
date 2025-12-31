const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: {
            values: ['super_admin', 'institute_admin', 'trainer', 'student'],
            message: props => `${props.value} is invalid.`
        },
        required: [true, "Role is mandatory"]
    },
    name: {
        type: String,
        required: [true, "User Name is a required field"]
    },
    email: {
        type: String,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
        required: [true, "Email is a required field"]
    },
    mobile: {
        type: String,
        required: [true, "Mobile number is a required field"],
        match: [/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        validate: {
            validator: function (value) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
            },
            message: "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
        }
    },
    profile_image: {
        type: String,
        required: [true, "Profile photo is required"]
    },
    status: {
        type: String,
        enum: {
            values: ['active', 'inactive', 'blocked'],
            message: props => `${props.value} is not a valid status. Select from active, inactive, or blocked.`
        },
        default: 'active'
    }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
