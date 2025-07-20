const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todo-app');

// Define schemas

const UserSchema = new Schema({
    // Schema definition here
    email: {
        type: String,
        unique: true
    },
    password: String,
    firstName: String,
    lastName: String
});

const TodoSchema = new Schema({
    // Schema definition here
    userId: Schema.Types.ObjectId,
    title: String
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User,
    Todo
}