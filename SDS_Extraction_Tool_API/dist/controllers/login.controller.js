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
exports.Errors = void 0;
exports.default = default_1;
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_json_1 = require("../json/config.json");
exports.Errors = {
    ERR_MISSING_PARAMS: {
        code: 'ERR_MISSING_PARAMS',
        message: 'One or more required parameters are missing',
    },
    ERR_INVALID_CREDENTIALS: {
        name: 'ERR_INVALID_CREDENTIALS',
        message: 'Invalid credentials'
    }
};
function default_1(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!req.body || !req.body.username || !req.body.password) {
                res.status(401).send({
                    isValid: false,
                    error: exports.Errors.ERR_MISSING_PARAMS
                });
                return;
            }
            const { username, password } = req.body;
            // Compare the hash
            const bcryptResult = yield bcrypt_1.default.compare(password, config_json_1.login.passwordHash);
            if (username !== config_json_1.login.username || !bcryptResult) {
                res.status(401).send({
                    isValid: false,
                    error: exports.Errors.ERR_INVALID_CREDENTIALS
                });
                return;
            }
            res.status(200).send({ isValid: true });
            return;
        }
        catch (error) {
            console.error(error);
            res.status(500).send({ error: "Unknown error." });
            return;
        }
    });
}
