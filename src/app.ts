import express, { Request, Response } from 'express';
import { server } from './json/config.json';
import getSDSJson from './functions/getSDSJson';

const PORT = server.port;
const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send(`Running on port ${PORT}`);
});

app.post('/extractSDSData', async (req: Request, res: Response) => {

    if (!req.body) {
        // Send error message
        res.status(400).send({message: `req.body is ${req.body}`});
        return;
    }

    const sdsString = req.body.sdsString;

    if (!sdsString) {
        // Send error message
        res.status(400).send({message: 'Invalid parameters.'});
        return;
    }

    // Get the response from the OpenAI API
    const queryResponse = await getSDSJson("test", sdsString); 

    if (!queryResponse) {
        res.status(400).send({message: 'Failed to get OpenAI query response.'});
        return;
    }

    res.status(200).send({jsonString: queryResponse})
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
