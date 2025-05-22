"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
/**
 * @description The format to use for the OpenAIAPI response
 */
const SDSJsonFormat = zod_1.z.object({
    productName: zod_1.z.string(),
    productCode: zod_1.z.string(),
    chemicalName: zod_1.z.string(),
    formula: zod_1.z.string(),
    casEpaNo: zod_1.z.string(),
    chemicalFamily: zod_1.z.string(),
    material: zod_1.z.string(),
    natureOfHazard: zod_1.z.string(),
    emergencyOverview: zod_1.z.string(),
    whmis: zod_1.z.string(),
    hmisHealth: zod_1.z.string(),
    hmisFlammability: zod_1.z.string(),
    hmisReactivity: zod_1.z.string(),
    // NFA
    nfpaHealth: zod_1.z.string(),
    nfpaFlammability: zod_1.z.string(),
    nfpaReactivity: zod_1.z.string(),
    nfpaSpec: zod_1.z.string(),
    potentialInhalation: zod_1.z.string(),
    potentialSkin: zod_1.z.string(),
    potentialEyes: zod_1.z.string(),
    potentialIngestion: zod_1.z.string(),
    // Temperature points
    boilingPoint: zod_1.z.string(),
    flammability: zod_1.z.string(),
    freezingPoint: zod_1.z.string(),
    vaporPressure: zod_1.z.string(),
    vaporDensity: zod_1.z.string(),
    solubilityInXXXXXXX: zod_1.z.string(),
    specificGravXXXXXXX: zod_1.z.string(),
    percentVolaXXXXXXXX: zod_1.z.string(),
    evaporation: zod_1.z.string(),
    appearance: zod_1.z.string(),
    flashPoint: zod_1.z.string(),
    flammableLimits: zod_1.z.string(),
    fireExtingMedia: zod_1.z.string(),
    spFireProc: zod_1.z.string(),
    unusualHazXXXXXXXX: zod_1.z.string(),
    healthHazard: zod_1.z.string(),
    // Image 5
    // Image 6
    firstAidSwallowed: zod_1.z.string(),
    ventilation: zod_1.z.string(),
    respiratory: zod_1.z.string(),
    eyeProtection: zod_1.z.string(),
    handProtection: zod_1.z.string(),
    otherProtection: zod_1.z.string(),
    // Image 7
    workPractices: zod_1.z.string(),
    stable: zod_1.z.string(),
    instability: zod_1.z.string(),
    incompatibility: zod_1.z.string(),
    decomposition: zod_1.z.string(),
    polymerization: zod_1.z.string(),
    // Image 8
    packagingDiXXXXXXXX: zod_1.z.string(),
    DOT: zod_1.z.string(),
    IMDG: zod_1.z.string(),
    IATA: zod_1.z.string(),
    DSL: zod_1.z.string(),
    misc: zod_1.z.string(),
    REACH: zod_1.z.string(),
    //createdOn: z.string(),
    //createdBy: z.string(),
});
exports.default = SDSJsonFormat;
