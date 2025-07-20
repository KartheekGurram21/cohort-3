const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const userRoutes = require('./routes/user');
const todoRoutes = require('./routes/todo');
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.get("/healthy", (req, res)=> res.send("I am Healthy"));
app.use('/api/user', userRoutes);
app.use('/api/todo', todoRoutes);

//  start writing your routes here

app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));

