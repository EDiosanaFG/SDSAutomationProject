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
exports.default = default_1;
const pdf2json_1 = __importDefault(require("pdf2json"));
const getSDSJson_1 = __importDefault(require("../functions/getSDSJson"));
/**
 * Concatenates the PDF parser's text
 * @param pdfData
 * @returns
 */
const concatenatePDFPageText = (pdfData) => {
    const allText = pdfData.Pages
        .map((page) => page.Texts
        .map((t) => t.R.map((r) => decodeURIComponent(r.T)).join(''))
        .join(' '))
        .join('\n\n');
    return allText;
};
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Try to get the file
            if (!req.file) {
                res.status(400).send({ error: `File is ${req.file}.` });
                return;
            }
            const pdfParser = new pdf2json_1.default();
            // Error handler
            pdfParser.on('pdfParser_dataError', (err) => {
                res.status(500).json({ error: err.parserError });
                return;
            });
            // Ready handler
            pdfParser.on('pdfParser_dataReady', (pdfData) => __awaiter(this, void 0, void 0, function* () {
                console.log('Data is ready, sending to API...');
                // Get the response from the OpenAI API
                const pdfText = concatenatePDFPageText(pdfData);
                const response = yield (0, getSDSJson_1.default)("test", pdfText);
                console.log('[SUCCESS]: Data parsed, sending to client...');
                if (!response) {
                    res.status(500).send({ error: 'No response from AI. ' });
                }
                res.status(200).send({ jsonString: JSON.stringify(response) });
            }));
            // Start parsing the .pdf file
            console.log('Parsing pdf...');
            pdfParser.parseBuffer(req.file.buffer);
        }
        catch (error) {
            res.status(500).json({ error: error });
            return;
        }
    });
}
