import { z } from 'zod';

/**
 * @description The format to use for the OpenAIAPI response
 */
const SDSJsonFormat = z.object({
    productName: z.string(),
    productCode: z.string(),
    chemicalName: z.string(),
    formula: z.string(),
    casEpaNo: z.string(),
    chemicalFamily: z.string(),
    material: z.string(),
    natureOfHazard: z.string(),
    emergencyOverview: z.string(),
    whmis: z.string(),
    hmisHealth: z.string(),
    hmisFlammability: z.string(),
    hmisReactivity: z.string(),

    // NFA
    nfpaHealth: z.string(),
    nfpaFlammability: z.string(),
    nfpaReactivity: z.string(),
    nfpaSpec: z.string(),

    potentialInhalation: z.string(),
    potentialSkin: z.string(),
    potentialEyes: z.string(),
    potentialIngestion: z.string(),

    // Temperature points
    boilingPoint: z.string(),
    flammability: z.string(),
    freezingPoint: z.string(),

    vaporPressure: z.string(),
    vaporDensity: z.string(),

    solubilityInXXXXXXX: z.string(),
    specificGravXXXXXXX: z.string(),
    percentVolaXXXXXXXX: z.string(),
    evaporation: z.string(),
    appearance: z.string(),
    flashPoint: z.string(),
    flammableLimits: z.string(),
    fireExtingMedia: z.string(),
    spFireProc: z.string(),
    unusualHazXXXXXXXX: z.string(),
    healthHazard: z.string(),

    // Image 5

    // Image 6
    firstAidSwallowed: z.string(),
    ventilation: z.string(),
    respiratory: z.string(),
    eyeProtection: z.string(),
    handProtection: z.string(),
    otherProtection: z.string(),

    // Image 7
    workPractices: z.string(),
    stable: z.string(),
    instability: z.string(),
    incompatibility: z.string(),
    decomposition: z.string(),
    polymerization: z.string(),

    // Image 8
    packagingDiXXXXXXXX: z.string(),
    DOT: z.string(),
    IMDG: z.string(),
    IATA: z.string(),
    DSL: z.string(),
    misc: z.string(),
    REACH: z.string(),
    //createdOn: z.string(),
    //createdBy: z.string(),
});

export default SDSJsonFormat;