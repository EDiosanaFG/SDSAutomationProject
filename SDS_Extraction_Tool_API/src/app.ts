import express, { Request, Response } from 'express';
import cors from 'cors';
import multer from 'multer'; // File processing
import PDFParser from 'pdf2json';
import { server } from './json/config.json';
import getSDSJson from './functions/getSDSJson';

const PORT = server.port;
const app = express();

app.use(express.json());
app.use(cors({ origin: 'https://isura-sds-automation.web.app/' }));

// Define middleware
const upload = multer();

app.get('/', (req: Request, res: Response) => {
    res.send(`Running on port ${PORT}`);
});

const concatenatePDFPageText = (pdfData: any) => {
    const allText = pdfData.Pages
        .map((page: any) =>
            page.Texts
                .map((t: any) => t.R.map((r: any) => decodeURIComponent(r.T)).join(''))
                .join(' ')
        )
        .join('\n\n')

    return allText;
};

// Route for extracting .pdf files
app.post('/api/extract', upload.single('file'), async (req: any, res: Response) => {
    try {
        // Try to get the file
        if (!req.file) {
            res.status(400).send({ error: `File is ${req.file}.` });
            return;
        }

        const pdfParser = new PDFParser();

        // Error handler
        pdfParser.on('pdfParser_dataError', (err: any) => {
            res.status(500).json({ error: err.parserError });
            return;
        });

        // Ready handler
        pdfParser.on('pdfParser_dataReady', async (pdfData: any) => {
            console.log('Data is ready, sending to API...');

            // Get the response from the OpenAI API
            const pdfText = concatenatePDFPageText(pdfData);
            const response = await getSDSJson("test", pdfText);
            console.log('[SUCCESS]: Data parsed, sending to client...')

            if (!response) {
                res.status(500).send({ error: 'No response from AI. ' });
            }

            res.status(200).send({ jsonString: JSON.stringify(response) })
        });

        // Start parsing the .pdf file
        console.log('Parsing pdf...');
        pdfParser.parseBuffer(req.file.buffer);


    } catch (error) {
        res.status(500).json({ error: error });
        return;
    }
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
