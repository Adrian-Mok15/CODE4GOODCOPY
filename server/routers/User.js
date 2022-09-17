const express = require('express')
const User = require('../models/User')
const router = new express.Router()

router.post("/add", async(req,res) => {
    const inUse = await User.findOne({_id: req.body.username})
    if (inUse) {
        res.status(409).send("Email already in use");
        return;
    }

    const user = new User({
        _id: req.body.username,
        password: req.body.password,
        memberType: req.body.memberType,
        location: req.body.location,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        eventsAttended: [],
        badges: [],
        dateJoined: req.body.dateJoined,
        linkedinLink: req.body.linkedin,
        blurb: req.body.blurb,
    });

    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({user,token});
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
})

