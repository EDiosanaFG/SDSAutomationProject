import express, { Request, Response } from 'express';
import { server } from './json/config.json';

const PORT = server.port;

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send(`Running on port ${PORT}`);
});

app.post('/extractSDSData', (req: Request, res: Response) => {
    // TODO
});

app.listen(() => {
    console.log(`Running on port ${PORT}`);
});
