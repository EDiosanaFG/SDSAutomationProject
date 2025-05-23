"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
/**
 * @description The format to use for the OpenAIAPI response
 */
const SDSJsonFormat_Half2 = zod_1.z.object({
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
    emergencyHours: zod_1.z.string(), // Hours
    typesOfInformation: zod_1.z.string(), // Types of information
    ghsClassification: zod_1.z.string(), // GHS classification of substance/mixture
    nationalOrRegionalInformation: zod_1.z.string(), // national or regional information
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
    impuritiesAndAdditives: zod_1.z.string(), // Impurities and additives that contribute to classification
    mixtureHazardousIngredientIdentitiesConcentrationRanges: zod_1.z.string(), // Mixture hazardous ingredient identities and concentration ranges
    firstAidMeasures: zod_1.z.string(), // Necessary first-aid measures
    firstAidInhalation: zod_1.z.string(), // Inhalation
    firstAidEyeContact: zod_1.z.string(), // Eye contact
    firstAidSkinContact: zod_1.z.string(), // Skin contact
    firstAidIngestion: zod_1.z.string(), // Ingestion
    mostImportantSymptoms: zod_1.z.string(), // Most important symptoms, acute and delayed
    medicalAttentionAndSpecialTreatment: zod_1.z.string(), // Indication of immediate medical attention and special treatment needed, if necessary
    extinguishingMedia: zod_1.z.string(), // Suitable and unsuitable extinguishing media
    specificHazards: zod_1.z.string(), // Specific hazards arising from the chemical
    firefightingPrecautions: zod_1.z.string(), // Special protective equipment and precautions for fire-fighters
    personalPrecautionsProtectiveEquipmentEmergencyProcedures: zod_1.z.string(), // Personal precautions, protective equipment and emergency procedures
    personalPrecautionsNonEmergencyPersonnel: zod_1.z.string(), // For non-emergency personnel
    personalPrecautionsEmergencyResponders: zod_1.z.string(), // For emergency responders
    environmentalPrecautions: zod_1.z.string(), // Environmental precautions
    methodsAndMaterialsForContainmentAndCleaningUp: zod_1.z.string(), // Methods and materials for containment and cleaning up
    containmentTechniques: zod_1.z.string(), // Containment techniques
    cleanupProcedures: zod_1.z.string(), // Clean up procedures
    precautionsForSafeHandling: zod_1.z.string(), // Precautions for safe handling
    generalHygiene: zod_1.z.string(), // General hygiene
    storageConditionsIncludingIncompatibilities: zod_1.z.string(), // Conditions for safe storage, including any incompatibilities
    controlParameters: zod_1.z.string(), // Control parameters
    occupationalExposureLimit: zod_1.z.string(), // Occupational exposure limit
    biologicalLimit: zod_1.z.string(), // Biological limit
    engineeringControls: zod_1.z.string(), // Appropriate engineering controls
    individualProtectionMeasures: zod_1.z.string(), // Individual protection measures
    appearance: zod_1.z.string(), // Appearance (physical state, color)
    odour: zod_1.z.string(), // Odour
    odourThreshold: zod_1.z.string(), // Odour threshold
    pH: zod_1.z.string(), // pH
    meltingPointFreezingPoint: zod_1.z.string(), // Melting point/freezing point
    initialBoilingPointAndRange: zod_1.z.string(), // Initial boiling point and range
    flashPoint: zod_1.z.string(), // Flash point
    evaporationRate: zod_1.z.string(), // Evaporation rate
    flammability: zod_1.z.string(), // Flammability
    upperLowerFlammabilityOrExplosiveLimits: zod_1.z.string(), // Upper/lower flammability or explosive limits
    vapourPressure: zod_1.z.string(), // Vapour pressure
    vapourDensity: zod_1.z.string(), // Vapour density
    relativeDensity: zod_1.z.string(), // Relative density
    solubilities: zod_1.z.string(), // Solubilities
    partitionCoefficientNOctanolWater: zod_1.z.string(), // Partition coefficient: n-octanol/water
    autoIgnitionTemperature: zod_1.z.string(), // Auto-ignition temperature
    decompositionTemperature: zod_1.z.string(), // Decomposition temperature
    viscosity: zod_1.z.string(), // Viscosity
    reactivity: zod_1.z.string(), // Reactivity
    chemicalStability: zod_1.z.string(), // Chemical stability
    possibilityOfHazardousReactions: zod_1.z.string(), // Possibility of hazardous reactions
    conditionsToAvoid: zod_1.z.string(), // Conditions to avoid
    incompatibleMaterials: zod_1.z.string(), // Incompatible materials
    hazardousDecompositionProducts: zod_1.z.string(), // Hazardous decomposition products
    descriptionOfToxicologicalEffects: zod_1.z.string(), // Description of toxicological (health) effects
    acuteToxicity: zod_1.z.string(), // Acute toxicity
    skinCorrosionIrritation: zod_1.z.string(), // Skin corrosion / irritation
    seriousEyeDamageIrritation: zod_1.z.string(), // Serious eye damage / irritation
    respiratoryOrSkinSensitization: zod_1.z.string(), // Respiratory or skin sensitization
    germCellMutagenicity: zod_1.z.string(), // Germ cell mutagenicity
    carcinogenicity: zod_1.z.string(), // Carcinogenicity
    reproductiveToxicity: zod_1.z.string(), // Reproductive toxicity
    stotSingleExposure: zod_1.z.string(), // STOT-single exposure
    stotRepeatedExposure: zod_1.z.string(), // STOT-repeated exposure
    aspirationHazard: zod_1.z.string(), // Aspiration hazard
    likelyRoutesOfExposure: zod_1.z.string(), // Information on likely routes of exposure
    symptomsRelatedPhysicalChemicalToxicologicalCharacteristics: zod_1.z.string(), // Symptoms related to the physical, chemical and toxicological characteristics
    delayedImmediateAndChronicEffectsShortLongTermExposure: zod_1.z.string(), // Delayed and immediate effects and also chronic effects from short and long term exposure
    numericalMeasuresOfToxicity: zod_1.z.string(), // Numerical measures of toxicity
    interactiveEffects: zod_1.z.string(), // Interactive effects
    whereSpecificChemicalDataNotAvailable: zod_1.z.string(), // Where specific chemical data are not available
    otherInformation: zod_1.z.string(), // Other information
    ecotoxicityAquaticTerrestrial: zod_1.z.string(), // Ecotoxicity (aquatic and terrestrial)
    persistenceAndDegradability: zod_1.z.string(), // Persistence and degradability
    bioaccumulativePotential: zod_1.z.string(), // Bioaccumulative potential
    mobilityInSoil: zod_1.z.string(), // Mobility in soil
    otherAdverseEffects: zod_1.z.string(), // Other adverse effects
    disposalMethods: zod_1.z.string(), // Disposal methods
    unNumber: zod_1.z.string(), // UN number
    unProperShippingName: zod_1.z.string(), // UN proper shipping name
    transportHazardClasses: zod_1.z.string(), // Transport hazard class(es)
    packingGroupIfApplicable: zod_1.z.string(), // Packing group, if applicable
    environmentalHazards: zod_1.z.string(), // Environmental hazards
    transportInBulk: zod_1.z.string(), // Transport in bulk
    specialPrecautions: zod_1.z.string(), // Special precautions
    safetyHealthEnvironmentalRegulations: zod_1.z.string(), // Safety, health and environmental regulations that apply
    dateOfPreparationOrUpdate: zod_1.z.string(), // Date of preparation or update
    abbreviationsUsed: zod_1.z.string(), // Abbreviations used
    literatureReferencesAndDataSources: zod_1.z.string(), // Literature references and data sources
    identification: zod_1.z.string(), // Identification
    hazardIdentification: zod_1.z.string(), // Hazard(s) Identification
    compositionInformationOnIngredients: zod_1.z.string(), // Composition / Information on Ingredients
    firstAidMeasures2: zod_1.z.string(), // First-aid Measures
    fireFightingMeasures: zod_1.z.string(), // Fire-fighting Measures
    accidentalReleaseMeasures: zod_1.z.string(), // Accidental Release Measures
    handlingAndStorage: zod_1.z.string(), // Handling and Storage
    exposureControlsPersonalProtection: zod_1.z.string(), // Exposure Controls / Personal Protection
    physicalAndChemicalProperties: zod_1.z.string(), // Physical and Chemical Properties
    stabilityAndReactivity: zod_1.z.string(), // Stability and Reactivity
    toxicologicalInformation: zod_1.z.string(), // Toxicological Information
    ecologicalInformation: zod_1.z.string(), // Ecological Information
    disposalConsiderations: zod_1.z.string(), // Disposal Considerations
    transportInformation: zod_1.z.string(), // Transport Information
    regulatoryInformation: zod_1.z.string(), // Regulatory Information
    otherInformation2: zod_1.z.string(),
});
exports.default = SDSJsonFormat;
