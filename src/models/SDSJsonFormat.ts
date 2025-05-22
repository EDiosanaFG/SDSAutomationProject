import { z } from 'zod';

/**
 * @description The format to use for the OpenAIAPI response
 */
const SDSJsonFormat = z.object({
    name: z.string(),
    description: z.string()
});

export default SDSJsonFormat;