"use strict";
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
    try {
        if (!req.body || !req.body.username || !req.body.passwordHash) {
            res.status(401).send({
                isValid: false,
                error: exports.Errors.ERR_MISSING_PARAMS
            });
        }
        const { username, passwordHash } = req.body;
        // Compare the hash
        const bcryptResult = bcrypt_1.default.compare(config_json_1.login.passwordHash, passwordHash);
        if (username !== config_json_1.login.username || !bcryptResult) {
            res.status(401).send({
                isValid: false,
                error: exports.Errors.ERR_INVALID_CREDENTIALS
            });
        }
        res.status(200).send({ isValid: true });
    }
    catch (error) {
        res.status(500).send({ error: error });
    }
}
