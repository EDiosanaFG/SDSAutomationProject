"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_json_1 = require("./json/config.json");
const getSDSJson_1 = __importDefault(require("./functions/getSDSJson"));
const PORT = config_json_1.server.port;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send(`Running on port ${PORT}`);
});
app.post('/extractSDSData', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        // Send error message
        res.status(400).send({ message: `req.body is ${req.body}` });
        return;
    }
    const sdsString = req.body.sdsString;
    if (!sdsString) {
        // Send error message
        res.status(400).send({ message: 'Invalid parameters.' });
        return;
    }
    // Get the response from the OpenAI API
    const queryResponse = yield (0, getSDSJson_1.default)("test", sdsString);
    if (!queryResponse) {
        res.status(400).send({ message: 'Failed to get OpenAI query response.' });
        return;
    }
    res.status(200).send({ jsonString: queryResponse });
}));
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
