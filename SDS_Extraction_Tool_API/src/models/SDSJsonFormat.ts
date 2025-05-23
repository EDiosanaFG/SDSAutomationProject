import { z } from 'zod';

/**
 * @description The first half of the SDSJsonFormat, since OpenAI only allows up to 100 JSON params
 */
export const SDSJsonFormat_Half1 = z.object({
    ghsProductIdentifier: z.string(),                              // GHS product identifier
    otherMeansOfIdentification: z.string(),                        // Other means of identification
    productName: z.string(),                                       // Product Name
    productCode: z.string(),                                       // Product Code
    recommendedUse: z.string(),                                    // Recommended use of the chemical and restrictions on use
    supplierDetails: z.string(),                                   // Supplier's details
    supplierName: z.string(),                                      // Supplier name
    supplierAddress: z.string(),                                   // Supplier address
    supplierCountry: z.string(),                                   // Supplier Country
    supplierPostalCode: z.string(),                                // Supplier Postal code
    supplierTel: z.string(),                                       // Supplier Tel
    supplierEmail: z.string(),                                     // Supplier email
    emergencyPhoneNumber: z.string(),                              // Emergency phone number
    emergencyHours: z.string(),                                    // Hours
    typesOfInformation: z.string(),                                // Types of information
    ghsClassification: z.string(),                                 // GHS classification of substance/mixture
    nationalOrRegionalInformation: z.string(),                     // national or regional information
    ghsLabelElements: z.string(),                                  // GHS label elements
    hazardSymbolsPictograms: z.string(),                           // Hazard Symbols/Pictograms
    signalWords: z.string(),                                       // Signal Word(s)
    hazardStatements: z.string(),                                  // Hazard statement(s)
    precautionaryStatements: z.string(),                           // Precautionary statement(s)
    otherHazardsNotClassified: z.string(),                         // Other hazards which do not result in classification
    chemicalIdentity: z.string(),                                  // Chemical Identity
    commonNameSynonyms: z.string(),                                // Common name, synonyms, etc.
    casNumber: z.string(),                                         // CAS number
    otherUniqueIdentifiers: z.string(),                            // Other unique identifiers
    impuritiesAndAdditives: z.string(),                            // Impurities and additives that contribute to classification
    mixtureHazardousIngredientIdentitiesConcentrationRanges: z.string(), // Mixture hazardous ingredient identities and concentration ranges
    firstAidMeasures: z.string(),                                  // Necessary first-aid measures
    firstAidInhalation: z.string(),                                // Inhalation
    firstAidEyeContact: z.string(),                                // Eye contact
    firstAidSkinContact: z.string(),                               // Skin contact
    firstAidIngestion: z.string(),                                 // Ingestion
    mostImportantSymptoms: z.string(),                             // Most important symptoms, acute and delayed
    medicalAttentionAndSpecialTreatment: z.string(),               // Indication of immediate medical attention and special treatment needed, if necessary
    extinguishingMedia: z.string(),                                // Suitable and unsuitable extinguishing media
    specificHazards: z.string(),                                   // Specific hazards arising from the chemical
    firefightingPrecautions: z.string(),                           // Special protective equipment and precautions for fire-fighters
    personalPrecautionsProtectiveEquipmentEmergencyProcedures: z.string(), // Personal precautions, protective equipment and emergency procedures
    personalPrecautionsNonEmergencyPersonnel: z.string(),           // For non-emergency personnel
    personalPrecautionsEmergencyResponders: z.string(),             // For emergency responders
    environmentalPrecautions: z.string(),                          // Environmental precautions
    methodsAndMaterialsForContainmentAndCleaningUp: z.string(),     // Methods and materials for containment and cleaning up
    containmentTechniques: z.string(),                             // Containment techniques
    cleanupProcedures: z.string(),                                 // Clean up procedures
    precautionsForSafeHandling: z.string(),                        // Precautions for safe handling
    generalHygiene: z.string(),                                    // General hygiene
    storageConditionsIncludingIncompatibilities: z.string(),       // Conditions for safe storage, including any incompatibilities
    controlParameters: z.string(),                                 // Control parameters
    occupationalExposureLimit: z.string(),                         // Occupational exposure limit
    biologicalLimit: z.string(),                                   // Biological limit
    engineeringControls: z.string(),                               // Appropriate engineering controls
    individualProtectionMeasures: z.string(),                      // Individual protection measures
    appearance: z.string(),                                        // Appearance (physical state, color)
    odour: z.string(),                                             // Odour
    odourThreshold: z.string(),                                    // Odour threshold
    pH: z.string(),                                                // pH
    meltingPointFreezingPoint: z.string(),                         // Melting point/freezing point
    initialBoilingPointAndRange: z.string(),                 // Initial boiling point and range
    flashPoint: z.string(),                                  // Flash point
    evaporationRate: z.string(),                             // Evaporation rate
    flammability: z.string(),                                // Flammability
    upperLowerFlammabilityOrExplosiveLimits: z.string(),     // Upper/lower flammability or explosive limits
    vapourPressure: z.string(),                              // Vapour pressure
    vapourDensity: z.string(),                               // Vapour density
    relativeDensity: z.string(),                             // Relative density
    solubilities: z.string(),                                // Solubilities
    partitionCoefficientNOctanolWater: z.string(),           // Partition coefficient: n-octanol/water
    autoIgnitionTemperature: z.string(),                     // Auto-ignition temperature
    decompositionTemperature: z.string(),                    // Decomposition temperature
    viscosity: z.string(),                                   // Viscosity
    reactivity: z.string(),                                  // Reactivity
    chemicalStability: z.string(),                           // Chemical stability
    possibilityOfHazardousReactions: z.string(),             // Possibility of hazardous reactions
    conditionsToAvoid: z.string(),                           // Conditions to avoid
    incompatibleMaterials: z.string(),                       // Incompatible materials
    hazardousDecompositionProducts: z.string(),              // Hazardous decomposition products
    descriptionOfToxicologicalEffects: z.string(),           // Description of toxicological (health) effects
});

/**
 * @description The format to use for the OpenAIAPI response
 */
export const SDSJsonFormat_Half2 = z.object({
    acuteToxicity: z.string(),                                         // Acute toxicity
    skinCorrosionIrritation: z.string(),                               // Skin corrosion / irritation
    seriousEyeDamageIrritation: z.string(),                            // Serious eye damage / irritation
    respiratoryOrSkinSensitization: z.string(),                        // Respiratory or skin sensitization
    germCellMutagenicity: z.string(),                                  // Germ cell mutagenicity
    carcinogenicity: z.string(),                                       // Carcinogenicity
    reproductiveToxicity: z.string(),                                  // Reproductive toxicity
    stotSingleExposure: z.string(),                                    // STOT-single exposure
    stotRepeatedExposure: z.string(),                                  // STOT-repeated exposure
    aspirationHazard: z.string(),                                      // Aspiration hazard
    likelyRoutesOfExposure: z.string(),                                // Information on likely routes of exposure
    symptomsRelatedPhysicalChemicalToxicologicalCharacteristics: z.string(), // Symptoms related to the physical, chemical and toxicological characteristics
    delayedImmediateAndChronicEffectsShortLongTermExposure: z.string(), // Delayed and immediate effects and also chronic effects from short and long term exposure
    numericalMeasuresOfToxicity: z.string(),                           // Numerical measures of toxicity
    interactiveEffects: z.string(),                                    // Interactive effects
    whereSpecificChemicalDataNotAvailable: z.string(),                 // Where specific chemical data are not available
    otherInformation: z.string(),                                      // Other information
    ecotoxicityAquaticTerrestrial: z.string(),                         // Ecotoxicity (aquatic and terrestrial)
    persistenceAndDegradability: z.string(),                           // Persistence and degradability
    bioaccumulativePotential: z.string(),                              // Bioaccumulative potential
    mobilityInSoil: z.string(),                                        // Mobility in soil
    otherAdverseEffects: z.string(),                                   // Other adverse effects
    disposalMethods: z.string(),                                       // Disposal methods
    unNumber: z.string(),                                              // UN number
    unProperShippingName: z.string(),                                  // UN proper shipping name
    transportHazardClasses: z.string(),                                // Transport hazard class(es)
    packingGroupIfApplicable: z.string(),                              // Packing group, if applicable
    environmentalHazards: z.string(),                                  // Environmental hazards
    transportInBulk: z.string(),                                       // Transport in bulk
    specialPrecautions: z.string(),                                    // Special precautions
    safetyHealthEnvironmentalRegulations: z.string(),                  // Safety, health and environmental regulations that apply
    dateOfPreparationOrUpdate: z.string(),                             // Date of preparation or update
    abbreviationsUsed: z.string(),                                     // Abbreviations used
    literatureReferencesAndDataSources: z.string(),                    // Literature references and data sources
    identification: z.string(),                                        // Identification
    hazardIdentification: z.string(),                                  // Hazard(s) Identification
    compositionInformationOnIngredients: z.string(),                   // Composition / Information on Ingredients
    firstAidMeasures2: z.string(),                                      // First-aid Measures
    fireFightingMeasures: z.string(),                                  // Fire-fighting Measures
    accidentalReleaseMeasures: z.string(),                             // Accidental Release Measures
    handlingAndStorage: z.string(),                                    // Handling and Storage
    exposureControlsPersonalProtection: z.string(),                    // Exposure Controls / Personal Protection
    physicalAndChemicalProperties: z.string(),                         // Physical and Chemical Properties
    stabilityAndReactivity: z.string(),                                // Stability and Reactivity
    toxicologicalInformation: z.string(),                              // Toxicological Information
    ecologicalInformation: z.string(),                                 // Ecological Information
    disposalConsiderations: z.string(),                                // Disposal Considerations
    transportInformation: z.string(),                                  // Transport Information
    regulatoryInformation: z.string(),                                 // Regulatory Information
    otherInformation2: z.string(),
});