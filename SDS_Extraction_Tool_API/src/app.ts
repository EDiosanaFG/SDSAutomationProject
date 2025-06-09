import express from 'express';
import cors from 'cors';
import multer from 'multer'; // File processing
import { server, urls } from './json/config.json';
import extractController from './controllers/extract.controller';
import loginController from './controllers/login.controller';

const PORT = server.port;
const app = express();

app.use(express.json());
app.use(cors({ origin: urls.allowedOrigin, credentials: true }));

// Define middleware
const upload = multer();

// Route for extracting .pdf files
app.post('/api/extract', upload.single('file'), extractController);

// Route for verifying the user
app.post('api/users/login', loginController)

// Added "0.0.0.0" so it can be hosted locally
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Running on port ${PORT}`);
});
