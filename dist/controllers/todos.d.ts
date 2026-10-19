import { Request, Response, NextFunction } from "express";
import { Todo } from "../models/todo";
export declare class TodosController {
    todos: Todo[];
    constructor();
    createTodo: (req: Request, res: Response, next: NextFunction) => void;
    getTodos: (req: Request, res: Response, next: NextFunction) => void;
    updateTodo: (req: Request, res: Response, next: NextFunction) => void;
    deleteTodo: (req: Request, res: Response, next: NextFunction) => void;
}
//# sourceMappingURL=todos.d.ts.map