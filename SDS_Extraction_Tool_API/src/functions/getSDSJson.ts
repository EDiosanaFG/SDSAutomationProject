import { openAIClient } from '../classes/OpenAIClient';
import { zodTextFormat } from 'openai/helpers/zod';
import { SDSJsonFormat_Half1, SDSJsonFormat_Half2 } from '../models/SDSJsonFormat';


/**
 * @description Uses an API call to an AI to extract the relevant information
 * from a raw string of a Standard Data Sheet to a .json string. 
 * @param url The URL to POST to
 * @param sdsString The raw text of the SDS document
 * @returns a JSON object of the relevant information from an SDS document
 */
const getSDSJsonFromString = async (url: string, sdsString: string): Promise<Object|null> => {
    if (!url) {
        throw new Error(`url is ${sdsString}`);
    }

    if (!sdsString) {
        throw new Error(`string is ${sdsString}`);
    }

    try {
        const instructions = 'You have been given a raw string of a .pdf file. The .pdf file is a Safety Data Sheet. Extract the relevant data from this string and return it.';
        // Send the string to the API and get the first half of the response
        const response1Promise = openAIClient.responses.parse({
            model: 'gpt-4.1-2025-04-14',
            temperature: 0,
            input: [
                { role: 'system', content: instructions },
                { role: 'user', content: sdsString } 
            ],
            text: {
                format: zodTextFormat(SDSJsonFormat_Half1, 'output')
            }
        });

        // Send the string to the API and get the second half of the response
        const response2Promise = openAIClient.responses.parse({
            model: 'gpt-4.1-2025-04-14',
            temperature: 0,
            input: [
                { role: 'system', content: instructions},
                { role: 'user', content: sdsString } 
            ],
            text: {
                format: zodTextFormat(SDSJsonFormat_Half2, 'output')
            }
        });

        const response1 = await response1Promise;
        const response2 = await response2Promise;

        if (response1.error) {
            throw new Error(response1.error.message);
        }

        if (response2.error) {
            throw new Error(response2.error.message);
        }

        // Combine the .jsons
        const json1 = JSON.parse(response1.output_text);
        const json2 = JSON.parse(response2.output_text);

        const mergedJson = { ...json1, ...json2 };

        // Return the json
        return mergedJson;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default getSDSJsonFromString;