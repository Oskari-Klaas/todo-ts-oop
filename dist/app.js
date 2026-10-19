"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use((0, express_2.json)());
app.use('/todos', todos_1.default);
app.use((error, req, res, next) => {
    res.json({ message: error.message });
});
app.get('/', (req, res) => {
    res.json({ message: 'Hello from express' });
});
app.listen(3011, () => {
    console.log('server is started at http://localhost:3011');
});
//# sourceMappingURL=app.js.map