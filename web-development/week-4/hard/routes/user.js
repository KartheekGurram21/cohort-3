const { Router } = require("express");
const router = Router();
const { User, Todo } = require('../database/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    try {
        const { email, password, firstName, lastName } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        });
        res.json({
            message: "signed up successfully"
        });
    } catch(err) {
        console.log(err);
    }
    
});

router.post('/login', async (req, res) => {
     // Implement user login logic
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            email: email
        });
        if(!user) {
            return res.status(404).json({
                message: "no user found"
            });
        } 
        const matchedPassword = await bcrypt.compare(password, user.password);
        if(!matchedPassword) {
            return res.status(403).json({
                message: "invalid credentials"
            });
        }
        const token = jwt.sign({
            userId: user._id
        }, process.env.JWT_SECRET);
        res.json({
            message: "signed in successfully",
            token: token
        });
    } catch(err) {
        console.log(err);
    }
});

router.get('/todos', userMiddleware, async (req, res) => {
    // Implement logic for getting todos for a user
    try {
        const userId = req.userId;
        const todos = await Todo.find({
            userId: userId
        });
        res.json({
            todos: todos
        });
    } catch(err) {
        console.log(err);
    }
});

router.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
    res.send("Remove the token from the local storage");
});

module.exports = router