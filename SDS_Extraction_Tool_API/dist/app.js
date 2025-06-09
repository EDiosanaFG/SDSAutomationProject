"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const multer_1 = __importDefault(require("multer")); // File processing
const config_json_1 = require("./json/config.json");
const extract_controller_1 = __importDefault(require("./controllers/extract.controller"));
const login_controller_1 = __importDefault(require("./controllers/login.controller"));
const PORT = config_json_1.server.port;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: config_json_1.urls.allowedOrigin, credentials: true }));
// Define middleware
const upload = (0, multer_1.default)();
// Route for extracting .pdf files
app.post('/api/extract', upload.single('file'), extract_controller_1.default);
// Route for verifying the user
app.post('api/users/login', login_controller_1.default);
// Added "0.0.0.0" so it can be hosted locally
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Running on port ${PORT}`);
});
