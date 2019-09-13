"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const add = (a, b) => {
    return { info: `${a + b}` };
};
app.get('/', (req, res, next) => {
    res.send(add(10, 20));
});
app.listen(3000, () => console.log('server is running'));
