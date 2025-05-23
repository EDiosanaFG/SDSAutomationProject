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
Object.defineProperty(exports, "__esModule", { value: true });
const OpenAIClient_1 = require("../classes/OpenAIClient");
const zod_1 = require("openai/helpers/zod");
const SDSJsonFormat_1 = require("../models/SDSJsonFormat");
/**
 * @description Uses an API call to an AI to extract the relevant information
 * from a raw string of a Standard Data Sheet to a .json string.
 * @param url The URL to POST to
 * @param sdsString The raw text of the SDS document
 * @returns a JSON object of the relevant information from an SDS document
 */
const getSDSJsonFromString = (url, sdsString) => __awaiter(void 0, void 0, void 0, function* () {
    if (!url) {
        throw new Error(`url is ${sdsString}`);
    }
    if (!sdsString) {
        throw new Error(`string is ${sdsString}`);
    }
    try {
        // Send the string to the API and get the first half of the response
        const response1 = yield OpenAIClient_1.openAIClient.responses.parse({
            model: 'gpt-4.1',
            input: [
                { role: 'system', content: 'Extract the relevant data from this string. ' },
                { role: 'user', content: sdsString }
            ],
            text: {
                format: (0, zod_1.zodTextFormat)(SDSJsonFormat_1.SDSJsonFormat_Half1, 'output')
            }
        });
        // Send the string to the API and get the second half of the response
        const response2 = yield OpenAIClient_1.openAIClient.responses.parse({
            model: 'gpt-4.1',
            input: [
                { role: 'system', content: 'Extract the relevant data from this string. ' },
                { role: 'user', content: sdsString }
            ],
            text: {
                format: (0, zod_1.zodTextFormat)(SDSJsonFormat_1.SDSJsonFormat_Half2, 'output')
            }
        });
        if (response1.error) {
            throw new Error(response1.error.message);
        }
        if (response2.error) {
            throw new Error(response2.error.message);
        }
        // Combine the .jsons
        const json1 = JSON.parse(response1.output_text);
        const json2 = JSON.parse(response2.output_text);
        const mergedJson = Object.assign(Object.assign({}, json1), json2);
        // Return the json
        return mergedJson;
    }
    catch (error) {
        console.log(error);
        return null;
    }
});
exports.default = getSDSJsonFromString;
