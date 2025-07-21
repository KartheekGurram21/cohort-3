let todos = []; // in memory space
let id = 0;
export async function getAllTodo (req, res, next){
    //  write here
    try {
        return res.status(200).json({
            todos: todos
        });
    } catch(err) {
        console.log(err);
    }
}

export async function createTodo (req, res, next){
    //  write here
    try {
        const todo = req.body.task;
        id++;
        todos.push({
            id: id,
            task: todo
        });
        res.status(200).json({
            id: id,
            task: todo
        });
    } catch(err) {
        console.log(err);
    }
}
export async function deleteTodoById(req, res, next) {
    try {
        const todoId = req.params.id;

        const index = todos.findIndex(todo => String(todo.id) === String(todoId));

        if (index === -1) {
            return res.status(404).json({ message: "Todo not found" });
        }

        // Remove the item without using filter
        todos = [...todos.slice(0, index), ...todos.slice(index + 1)];

        res.json({ message: "Todo deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
}
