import mongoose, {Schema} from 'mongoose';

// User Schema

const UserSchema = new Schema({
    username:{
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        unique: true
    },
    email:{
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address']
    },
    password:{
        type: String,
        required: [true, 'Password is required'],
        match: [/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Password must be at least 8 characters long and contain at least one letter and one number']
    },
    otp:{
        type: String, 
        required: [true," OTP is required"],
    },
    otpExpiry:{
        type: Date,
        required:[true, "otpExpiry is required"],
    },
    isOtpVerified:{
        type: Boolean,
        default: false,
    },
    isAcceptingMessages:{
        type: Boolean,
        default: true
    },

    messages:[{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }]
}, {timestamps: true});

// Message Schema

const MessageSchema = new Schema({
    content:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

const User = mongoose.model('User', UserSchema);
const Message = mongoose.model('Message', MessageSchema);

export default {User, Message};

// ! Notes:- 
// Correct Flow:
// Always follow this order:

// Import dependencies (mongoose, Schema).
// Define your schemas (UserSchema, MessageSchema).
// Create models using mongoose.model().
// Export the models.

// Schemas Must Be Defined First:
// UserSchema and MessageSchema need to be declared first because mongoose.model() uses those schemas as the second argument.
// If you place the mongoose.model() code at the top, it will throw an error because the schemas haven’t been defined yet.

// The ref value should not reference the schema name but the model name. The model names are User and Message, which you define when calling mongoose.model().

