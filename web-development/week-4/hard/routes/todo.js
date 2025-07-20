const { Router } = require("express");
const { Todo } = require('../database/index');
const adminMiddleware = require("../middleware/user");
const router = Router();

// todo Routes
router.post('/', adminMiddleware, async (req, res) => {
    // Implement todo creation logic
    try {
        const userId = req.userId;
        const title = req.body.title;
        await Todo.create({
            userId: userId,
            title: title
        });
        res.json({
            message: "Todo created successfully"
        })
    } catch(err) {
        console.log(err);
    }
});

router.put('/', adminMiddleware, async (req, res) => {
    // Implement update todo  logic
    try {
        const userId = req.userId;
        const { todoId, title } = req.body;
        await Todo.updateOne({
            userId: userId,
            _id: todoId
        }, {
            $set: {title: title}
        });
        res.json({
            message: "todo updated successfully"
        });
    } catch(err) {
        console.log(err);
    }
});

router.delete('/', adminMiddleware, async (req, res) => {
    // Implement delete todo logic
    try {
        const userId = req.userId;
        const todoId = req.body.todoId;
        await Todo.deleteOne({
            userId: userId,
            _id: todoId
        });
        res.send("todo deleted successfully");
    } catch(err) {
        console.log(err);
    }
});

router.delete('/:id', adminMiddleware, async (req, res) => {
    // Implement delete todo by id logic
    try {
        const userId = req.userId;
        const todoId = req.params.id;
        await Todo.deleteOne({
            userId: userId,
            _id: todoId
        });
        res.send("todo deleted successfully");
    } catch(err) {
        console.log(err);
    }
});


router.get('/', adminMiddleware, async (req, res) => {
    // Implement fetching all todo logic
    try {
        const userId = req.userId;
        const todoId = req.body.todoId;
        const todo = await Todo.findOne({
            userId: userId,
            _id: todoId
        });
        res.json({
            todo: todo
        });
    } catch(err) {
        console.log(err);
    }
});

router.get('/:id', adminMiddleware, async (req, res) => {
    // Implement fetching todo by id logic
    try {
        const userId = req.userId;
        const todoId = req.params.id;
        const todo = await Todo.findOne({
            userId: userId,
            _id: todoId
        });
        res.json({
            todo: todo
        });
    } catch(err) {
        console.log(err);
    }
});

module.exports = router;