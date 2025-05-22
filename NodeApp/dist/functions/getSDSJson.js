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
const OpenAIClient_1 = require("../classes/OpenAIClient");
const zod_1 = require("openai/helpers/zod");
const SDSJsonFormat_1 = __importDefault(require("../models/SDSJsonFormat"));
/**
 * @description Uses an API call to an AI to extract the relevant information
 * from a raw string of a Standard Data Sheet to a .json string.
 * @param url The URL to POST to
 * @param sdsString The raw text of the SDS document
 * @returns a JSON string of the relevant information from an SDS document
 */
const getSDSJsonFromString = (url, sdsString) => __awaiter(void 0, void 0, void 0, function* () {
    if (!url) {
        throw new Error(`url is ${sdsString}`);
    }
    if (!sdsString) {
        throw new Error(`string is ${sdsString}`);
    }
    try {
        // Send the string to the API
        const response = yield OpenAIClient_1.openAIClient.responses.parse({
            model: 'gpt-4.1',
            input: [
                { role: 'system', content: 'Extract the relevant data from this string. ' },
                { role: 'user', content: sdsString }
            ],
            text: {
                format: (0, zod_1.zodTextFormat)(SDSJsonFormat_1.default, 'output')
            }
        });
        console.log(response.output_text);
        if (response.error) {
            throw new Error(response.error.message);
        }
        // Return the json
        return response.output_text;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.default = getSDSJsonFromString;
