import { z } from 'zod';

/**
 * @description The format to use for the OpenAIAPI response
 */
const SDSJsonFormat = z.object({
    ghsProductIdentifier: z.string(),                     // GHS product identifier
    otherMeansOfIdentification: z.string(),               // Other means of identification
    productName: z.string(),                              // Product Name
    productCode: z.string(),                              // Product Code
    recommendedUse: z.string(),                           // Recommended use of the chemical and restrictions on use
    supplierDetails: z.string(),                          // Supplier's details
    supplierName: z.string(),                             // Supplier name
    supplierAddress: z.string(),                          // Supplier address
    supplierCountry: z.string(),                          // Supplier Country
    supplierPostalCode: z.string(),                       // Supplier Postal code
    supplierTel: z.string(),                              // Supplier Tel
    supplierEmail: z.string(),                            // Supplier email
    emergencyPhoneNumber: z.string(),                     // Emergency phone number
    hours: z.string(),                                    // Hours
    typesOfInformation: z.string(),                       // Types of information
    ghsClassification: z.string(),                        // GHS classification of substance/mixture
    nationalRegionalInformation: z.string(),               // National or regional information
    ghsLabelElements: z.string(),                         // GHS label elements
    hazardSymbolsPictograms: z.string(),                  // Hazard Symbols/Pictograms
    signalWords: z.string(),                              // Signal Word(s)
    hazardStatements: z.string(),                         // Hazard statement(s)
    precautionaryStatements: z.string(),                  // Precautionary statement(s)
    otherHazardsNotClassified: z.string(),                // Other hazards which do not result in classification
    chemicalIdentity: z.string(),                         // Chemical Identity
    commonNameSynonyms: z.string(),                       // Common name, synonyms, etc.
    casNumber: z.string(),                                // CAS number
    otherUniqueIdentifiers: z.string(),                   // Other unique identifiers
    impuritiesAdditives: z.string(),                      // Impurities and additives that contribute to classification
    mixtureHazardousIngredients: z.string(),              // Mixture hazardous ingredient identities and concentration ranges
    necessaryFirstAidMeasures: z.string(),                // Necessary first-aid measures
    firstAidInhalation: z.string(),                       // Inhalation
    firstAidEyeContact: z.string(),                       // Eye contact
    firstAidSkinContact: z.string(),                      // Skin contact
    firstAidIngestion: z.string(),                        // Ingestion
    mostImportantSymptoms: z.string(),                    // Most important symptoms, acute and delayed
    immediateMedicalAttention: z.string(),                // Indication of immediate medical attention and special treatment needed
    suitableUnsuitableExtinguishingMedia: z.string(),     // Suitable and unsuitable extinguishing media
    specificHazards: z.string(),                          // Specific hazards arising from the chemical
    protectiveEquipmentFirefighters: z.string(),          // Special protective equipment and precautions for fire-fighters
    personalPrecautionsNonEmergencyPersonnel: z.string(), // Personal precautions, protective equipment and emergency procedures (non-emergency)
    personalPrecautionsEmergencyResponders: z.string(),   // Personal precautions for emergency responders
    environmentalPrecautions: z.string(),                 // Environmental precautions
    containmentMaterials: z.string(),                     // Methods and materials for containment and cleaning up
    containmentTechniques: z.string(),                    // Containment techniques
    cleanupProcedures: z.string(),                        // Clean up procedures
    precautionsForSafeHandling: z.string(),               // Precautions for safe handling
    generalHygiene: z.string(),                           // General hygiene
    storageConditions: z.string(),                        // Conditions for safe storage, including any incompatibilities
    controlParametersOccupationalExposureLimit: z.string(), // Occupational exposure limit
    controlParametersBiologicalLimit: z.string(),         // Biological limit
    engineeringControls: z.string(),                      // Appropriate engineering controls
    individualProtectionMeasures: z.string(),             // Individual protection measures
    appearancePhysicalStateColor: z.string(),             // Appearance (physical state, color)
    odor: z.string(),                                     // Odour
    odorThreshold: z.string(),                            // Odour threshold
    ph: z.string(),                                       // pH
    meltingFreezingPoint: z.string(),                     // Melting point/freezing point
    initialBoilingPointRange: z.string(),                 // Initial boiling point and range
    flashPoint: z.string(),                               // Flash point
    evaporationRate: z.string(),                          // Evaporation rate
    flammability: z.string(),                             // Flammability
    explosiveLimits: z.string(),                          // Upper/lower flammability or explosive limits
    vaporPressure: z.string(),                            // Vapour pressure
    vaporDensity: z.string(),                             // Vapour density
    relativeDensity: z.string(),                          // Relative density
    solubilities: z.string(),                             // Solubilities
    partitionCoefficient: z.string(),                     // Partition coefficient: n-octanol/water
    autoIgnitionTemperature: z.string(),                  // Auto-ignition temperature
    decompositionTemperature: z.string(),                 // Decomposition temperature
    viscosity: z.string(),                                // Viscosity
    reactivity: z.string(),                               // Reactivity
    chemicalStability: z.string(),                        // Chemical stability
    hazardousReactions: z.string(),                       // Possibility of hazardous reactions
    conditionsToAvoid: z.string(),                        // Conditions to avoid
    incompatibleMaterials: z.string(),                    // Incompatible materials
    hazardousDecompositionProducts: z.string(),           // Hazardous decomposition products
    toxicologicalEffectsDescription: z.string(),          // Description of toxicological (health) effects
    acuteToxicity: z.string(),                            // Acute toxicity
    skinCorrosionIrritation: z.string(),                  // Skin corrosion / irritation
    seriousEyeDamageIrritation: z.string(),               // Serious eye damage / irritation
    respiratorySkinSensitization: z.string(),             // Respiratory or skin sensitization
    germCellMutagenicity: z.string(),                     // Germ cell mutagenicity
    carcinogenicity: z.string(),                          // Carcinogenicity
    reproductiveToxicity: z.string(),                     // Reproductive toxicity
    stotSingleExposure: z.string(),                       // STOT-single exposure
    stotRepeatedExposure: z.string(),                     // STOT-repeated exposure
    aspirationHazard: z.string(),                         // Aspiration hazard
    likelyRoutesOfExposure: z.string(),                   // Information on likely routes of exposure
    symptomsPhysicalChemicalCharacteristics: z.string(),  // Symptoms related to the physical, chemical and toxicological characteristics
    delayedImmediateChronicEffects: z.string(),           // Delayed and immediate effects and also chronic effects from short and long term exposure
    numericalToxicityMeasures: z.string(),                // Numerical measures of toxicity
    interactiveEffects: z.string(),                       // Interactive effects
    dataNotAvailable: z.string(),                         // Where specific chemical data are not available
    otherInformation: z.string(),                         // Other information
    ecotoxicityAquaticTerrestrial: z.string(),            // Ecotoxicity (aquatic and terrestrial)
    persistenceDegradability: z.string(),                 // Persistence and degradability
    bioaccumulativePotential: z.string()                  // Bioaccumulative potential

});

export default SDSJsonFormat;