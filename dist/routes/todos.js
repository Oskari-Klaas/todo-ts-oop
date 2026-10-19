"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = (0, express_1.Router)();
const todosController = new todos_1.TodosController();
router.post('/', todosController.createTodo);
router.get('/', todosController.getTodos);
router.patch('/:id', todosController.updateTodo);
router.delete('/:id', todosController.deleteTodo);
exports.default = router;
//# sourceMappingURL=todos.js.map