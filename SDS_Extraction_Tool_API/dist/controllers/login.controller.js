"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
function default_1(req, res) {
    try {
        let verificationResult = false;
        res.status(200).send({ isValid: verificationResult });
    }
    catch (error) {
        res.status(500).send({ error: error });
    }
}
