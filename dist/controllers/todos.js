"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosController = void 0;
const todo_1 = require("../models/todo");
class TodosController {
    todos = [];
    constructor() {
        this.createTodo = this.createTodo.bind(this);
    }
    createTodo = (req, res, next) => {
        try {
            const task = req.body.task;
            const newTodo = new todo_1.Todo(Math.random().toString(), task);
            this.todos.push(newTodo);
            res.status(201).json({
                message: 'Todo created successfully',
                createdtask: newTodo
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    getTodos = (req, res, next) => {
        try {
            res.status(201).json({
                tasks: this.todos
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    updateTodo = (req, res, next) => {
        try {
            const todoId = req.params.id;
            const updatedTask = req.body.task;
            const todoIndex = this.todos.findIndex(todo => todo.id === todoId);
            if (todoIndex < 0) {
                throw new Error('Could not find todo with such id');
            }
            this.todos[todoIndex] = new todo_1.Todo(this.todos[todoIndex].id, updatedTask);
            res.status(201).json({
                message: 'Todo is updated!',
                updatedTask: this.todos[todoIndex]
            });
        }
        catch (error) {
            console.log(error);
        }
    };
    deleteTodo = (req, res, next) => {
        try {
            const todoId = req.params.id;
            const todoIndex = this.todos.findIndex(todo => todo.id === todoId);
            if (todoIndex < 0) {
                throw new Error('could not find todo with such id');
            }
            this.todos.splice(todoIndex, 1);
            res.status(201).json({
                message: 'Todo is deleted!',
            });
        }
        catch (error) {
            console.log(error);
        }
    };
}
exports.TodosController = TodosController;
//# sourceMappingURL=todos.js.map