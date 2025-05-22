"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openAIClient = void 0;
const openai_1 = __importDefault(require("openai"));
require('dotenv').config();
const API_KEY = process.env['OPENAI_API_KEY'];
if (!API_KEY) {
    throw new Error(`OPENAI_API_KEY key not found. It should be in a .env file.`);
}
exports.openAIClient = new openai_1.default({
    apiKey: API_KEY
});
