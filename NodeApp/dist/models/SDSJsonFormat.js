"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
/**
 * @description The format to use for the OpenAIAPI response
 */
const SDSJsonFormat = zod_1.z.object({
    ghsProductIdentifier: zod_1.z.string(), // GHS product identifier
    otherMeansOfIdentification: zod_1.z.string(), // Other means of identification
    productName: zod_1.z.string(), // Product Name
    productCode: zod_1.z.string(), // Product Code
    recommendedUse: zod_1.z.string(), // Recommended use of the chemical and restrictions on use
    supplierDetails: zod_1.z.string(), // Supplier's details
    supplierName: zod_1.z.string(), // Supplier name
    supplierAddress: zod_1.z.string(), // Supplier address
    supplierCountry: zod_1.z.string(), // Supplier Country
    supplierPostalCode: zod_1.z.string(), // Supplier Postal code
    supplierTel: zod_1.z.string(), // Supplier Tel
    supplierEmail: zod_1.z.string(), // Supplier email
    emergencyPhoneNumber: zod_1.z.string(), // Emergency phone number
    hours: zod_1.z.string(), // Hours
    typesOfInformation: zod_1.z.string(), // Types of information
    ghsClassification: zod_1.z.string(), // GHS classification of substance/mixture
    nationalRegionalInformation: zod_1.z.string(), // National or regional information
    ghsLabelElements: zod_1.z.string(), // GHS label elements
    hazardSymbolsPictograms: zod_1.z.string(), // Hazard Symbols/Pictograms
    signalWords: zod_1.z.string(), // Signal Word(s)
    hazardStatements: zod_1.z.string(), // Hazard statement(s)
    precautionaryStatements: zod_1.z.string(), // Precautionary statement(s)
    otherHazardsNotClassified: zod_1.z.string(), // Other hazards which do not result in classification
    chemicalIdentity: zod_1.z.string(), // Chemical Identity
    commonNameSynonyms: zod_1.z.string(), // Common name, synonyms, etc.
    casNumber: zod_1.z.string(), // CAS number
    otherUniqueIdentifiers: zod_1.z.string(), // Other unique identifiers
    impuritiesAdditives: zod_1.z.string(), // Impurities and additives that contribute to classification
    mixtureHazardousIngredients: zod_1.z.string(), // Mixture hazardous ingredient identities and concentration ranges
    necessaryFirstAidMeasures: zod_1.z.string(), // Necessary first-aid measures
    firstAidInhalation: zod_1.z.string(), // Inhalation
    firstAidEyeContact: zod_1.z.string(), // Eye contact
    firstAidSkinContact: zod_1.z.string(), // Skin contact
    firstAidIngestion: zod_1.z.string(), // Ingestion
    mostImportantSymptoms: zod_1.z.string(), // Most important symptoms, acute and delayed
    immediateMedicalAttention: zod_1.z.string(), // Indication of immediate medical attention and special treatment needed
    suitableUnsuitableExtinguishingMedia: zod_1.z.string(), // Suitable and unsuitable extinguishing media
    specificHazards: zod_1.z.string(), // Specific hazards arising from the chemical
    protectiveEquipmentFirefighters: zod_1.z.string(), // Special protective equipment and precautions for fire-fighters
    personalPrecautionsNonEmergencyPersonnel: zod_1.z.string(), // Personal precautions, protective equipment and emergency procedures (non-emergency)
    personalPrecautionsEmergencyResponders: zod_1.z.string(), // Personal precautions for emergency responders
    environmentalPrecautions: zod_1.z.string(), // Environmental precautions
    containmentMaterials: zod_1.z.string(), // Methods and materials for containment and cleaning up
    containmentTechniques: zod_1.z.string(), // Containment techniques
    cleanupProcedures: zod_1.z.string(), // Clean up procedures
    precautionsForSafeHandling: zod_1.z.string(), // Precautions for safe handling
    generalHygiene: zod_1.z.string(), // General hygiene
    storageConditions: zod_1.z.string(), // Conditions for safe storage, including any incompatibilities
    controlParametersOccupationalExposureLimit: zod_1.z.string(), // Occupational exposure limit
    controlParametersBiologicalLimit: zod_1.z.string(), // Biological limit
    engineeringControls: zod_1.z.string(), // Appropriate engineering controls
    individualProtectionMeasures: zod_1.z.string(), // Individual protection measures
    appearancePhysicalStateColor: zod_1.z.string(), // Appearance (physical state, color)
    odor: zod_1.z.string(), // Odour
    odorThreshold: zod_1.z.string(), // Odour threshold
    ph: zod_1.z.string(), // pH
    meltingFreezingPoint: zod_1.z.string(), // Melting point/freezing point
    initialBoilingPointRange: zod_1.z.string(), // Initial boiling point and range
    flashPoint: zod_1.z.string(), // Flash point
    evaporationRate: zod_1.z.string(), // Evaporation rate
    flammability: zod_1.z.string(), // Flammability
    explosiveLimits: zod_1.z.string(), // Upper/lower flammability or explosive limits
    vaporPressure: zod_1.z.string(), // Vapour pressure
    vaporDensity: zod_1.z.string(), // Vapour density
    relativeDensity: zod_1.z.string(), // Relative density
    solubilities: zod_1.z.string(), // Solubilities
    partitionCoefficient: zod_1.z.string(), // Partition coefficient: n-octanol/water
    autoIgnitionTemperature: zod_1.z.string(), // Auto-ignition temperature
    decompositionTemperature: zod_1.z.string(), // Decomposition temperature
    viscosity: zod_1.z.string(), // Viscosity
    reactivity: zod_1.z.string(), // Reactivity
    chemicalStability: zod_1.z.string(), // Chemical stability
    hazardousReactions: zod_1.z.string(), // Possibility of hazardous reactions
    conditionsToAvoid: zod_1.z.string(), // Conditions to avoid
    incompatibleMaterials: zod_1.z.string(), // Incompatible materials
    hazardousDecompositionProducts: zod_1.z.string(), // Hazardous decomposition products
    toxicologicalEffectsDescription: zod_1.z.string(), // Description of toxicological (health) effects
    acuteToxicity: zod_1.z.string(), // Acute toxicity
    skinCorrosionIrritation: zod_1.z.string(), // Skin corrosion / irritation
    seriousEyeDamageIrritation: zod_1.z.string(), // Serious eye damage / irritation
    respiratorySkinSensitization: zod_1.z.string(), // Respiratory or skin sensitization
    germCellMutagenicity: zod_1.z.string(), // Germ cell mutagenicity
    carcinogenicity: zod_1.z.string(), // Carcinogenicity
    reproductiveToxicity: zod_1.z.string(), // Reproductive toxicity
    stotSingleExposure: zod_1.z.string(), // STOT-single exposure
    stotRepeatedExposure: zod_1.z.string(), // STOT-repeated exposure
    aspirationHazard: zod_1.z.string(), // Aspiration hazard
    likelyRoutesOfExposure: zod_1.z.string(), // Information on likely routes of exposure
    symptomsPhysicalChemicalCharacteristics: zod_1.z.string(), // Symptoms related to the physical, chemical and toxicological characteristics
    delayedImmediateChronicEffects: zod_1.z.string(), // Delayed and immediate effects and also chronic effects from short and long term exposure
    numericalToxicityMeasures: zod_1.z.string(), // Numerical measures of toxicity
    interactiveEffects: zod_1.z.string(), // Interactive effects
    dataNotAvailable: zod_1.z.string(), // Where specific chemical data are not available
    otherInformation: zod_1.z.string(), // Other information
    ecotoxicityAquaticTerrestrial: zod_1.z.string(), // Ecotoxicity (aquatic and terrestrial)
    persistenceDegradability: zod_1.z.string(), // Persistence and degradability
    bioaccumulativePotential: zod_1.z.string() // Bioaccumulative potential
});
exports.default = SDSJsonFormat;
