const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Description: {
        type: String, 
        required: true,
    },
    minUsers: {
        type: Number,
        required: true,
    },
    maxUsers: {
        type: Number,
        required: true,
    },
    StartTime: {
        type: Date,
        required: true,
    },
    StopTime: {
        type: Date,
        required: true,
    },
    userList: [
        {
            _id: String,
        },
        {
            _id: String,
        },
        {
            _id: String,
        },
        {
            _id: String,
        },
        {
            _id: String,
        },
        {
            _id: String,
        },
        {
            _id: String,
        },
        {
            _id: String,
        },
        {
            _id: String,
        },
        {
            _id: String,
        }
    ],
    numUsers: {
        type: Number, 
        required: true,
    },
    location: {
        type: String, 
        required: true,
    }
});

const Event = mongoose.model("events", EventSchema);
module.exports = Event;