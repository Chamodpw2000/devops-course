const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
app.use(cors());
const User = require('./User');


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {

    }).then(() => {
    console.log('Connected to MongoDB');
    }).catch((err) => {
    console.log('Failed to connect to MongoDB', err);
    });

app.listen(5000, () => {
    console.log('Server is running on port 5000');
    });

// Create a new user

app.post('/users', async (req, res) => {
 
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email
        });
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    
});

// Get all users

app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


