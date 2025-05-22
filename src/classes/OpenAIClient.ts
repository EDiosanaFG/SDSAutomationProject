import OpenAI from 'openai';
require('dotenv').config();
const API_KEY = process.env['OPENAI_API_KEY'];

if (!API_KEY) {
    throw new Error(`OPENAI_API_KEY key not found. It should be in a .env file.`);
}

export const openAIClient = new OpenAI({
    apiKey: API_KEY
});