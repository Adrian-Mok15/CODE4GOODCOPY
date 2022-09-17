// import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

// app
const app = express();

const User = require('./models/User');
const Event = require('./models/Event')



// db
mongoose.connect(process.env.MONGODB_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("DB CONNECTED."))
.catch(() => console.log("DB CONNECTION ERROR"));


// middleware
app.use(morgan("dev"));
app.use(cors({origin: true, credentials: true}));


// routes
app.post('/users/add', (req, res) => {
    const fname = req.body.firstName;
    const lname = req.body.lastName;
    const uname = req.body.username;
    const password = req.body.password;
    const mType = req.body.memberType;

    User.find({_id: uname}, (error, data) => {
        if (error) {
            console.log(error);
        }
        else {
            if (data.length == 0) {
                const newUser = new User({
                    firstName: fname,
                    lastName: lname,
                    _id: uname,
                    password: password,
                    memberType: mType,
                });

                try {
                    newUser.save();
                    res.send("inserted new user");
                }
                catch (err) {
                    console.log(err);
                }
            }
        }
    })
});



// ports
const port = process.env.PORT;


// listener
const server = app.listen(port, () => console.log(`Server is running on port ${port}`));
