import express from 'express';
import cors from 'cors';
import { getAllTodo, createTodo, deleteTodoById } from './routes/todo.js';
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


// Get all todos
app.get('/todos', getAllTodo);

// Add a new todo
app.post('/todos', createTodo);

// Delete a todo
app.delete('/todos/:id', deleteTodoById);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});