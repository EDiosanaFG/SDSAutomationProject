import { openAIClient } from '../classes/OpenAIClient';
import { zodTextFormat } from 'openai/helpers/zod';
import SDSJsonFormat from '../models/SDSJsonFormat';


/**
 * @description Uses an API call to an AI to extract the relevant information
 * from a raw string of a Standard Data Sheet to a .json string. 
 * @param url The URL to POST to
 * @param sdsString The raw text of the SDS document
 * @returns a JSON string of the relevant information from an SDS document
 */
const getSDSJsonFromString = async (url: string, sdsString: string): Promise<string|null> => {
    if (!url) {
        throw new Error(`url is ${sdsString}`);
    }

    if (!sdsString) {
        throw new Error(`string is ${sdsString}`);
    }

    try {
        // Send the string to the API
        const response = await openAIClient.responses.parse({
            model: 'gpt-4.1',
            input: [
                { role: 'system', content: 'Extract the relevant data from this string. '},
                { role: 'user', content: sdsString } 
            ],
            text: {
                format: zodTextFormat(SDSJsonFormat, 'output')
            }
        });

        console.log(response.output_text);
        if (response.error) {
            throw new Error(response.error.message);
        }

        // Return the json
        return response.output_text;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default getSDSJsonFromString;