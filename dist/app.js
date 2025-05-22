"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_json_1 = require("./json/config.json");
const PORT = config_json_1.server.port;
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send(`Running on port ${PORT}`);
});
app.post('/extractSDSData', (req, res) => {
    // TODO
});
app.listen(() => {
    console.log(`Running on port ${PORT}`);
});
