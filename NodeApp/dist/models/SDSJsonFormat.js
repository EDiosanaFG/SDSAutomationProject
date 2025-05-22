"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
/**
 * @description The format to use for the OpenAIAPI response
 */
const SDSJsonFormat = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string()
});
exports.default = SDSJsonFormat;
