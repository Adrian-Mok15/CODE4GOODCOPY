const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    memberType: {
        type: String,
        required: true,
    },
    location: [
        {
            State: String, 
            ZipCode: String,
        },
    ],
    email: {
        type: String, 
        required: false,
    },
    phoneNumber: {
        type: String, 
        required: false,
    },
    eventsAttended: [
        {
            Name: String, 
        },
        {
            Name: String,
        },
        {
            Name: String,
        },
        {
            Name: String,
        }, 
        {
            Name: String,
        },
        {  
            Name: String,
        },
        {
            Name: String,
        }
    ],
    badges: [
        {
            Type: String,
        },
        {
            Type: String,
        }
    ],
    dateJoined: {
        type: Date,
        required: false,
    },
    linkedInLink: {
        type: String,
        required: false,
    },
    blurb: {
        type: String, 
        required: false,
    }
});

const User = mongoose.model("users", UserSchema);
module.exports = User;