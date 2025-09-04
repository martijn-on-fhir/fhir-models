import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { MedicationKnowledgeAdministrationGuidelines } from './MedicationKnowledgeAdministrationGuidelines';
import { MedicationKnowledgeCost } from './MedicationKnowledgeCost';
import { MedicationKnowledgeDrugCharacteristic } from './MedicationKnowledgeDrugCharacteristic';
import { MedicationKnowledgeIngredient } from './MedicationKnowledgeIngredient';
import { MedicationKnowledgeKinetics } from './MedicationKnowledgeKinetics';
import { MedicationKnowledgeMedicineClassification } from './MedicationKnowledgeMedicineClassification';
import { MedicationKnowledgeMonitoringProgram } from './MedicationKnowledgeMonitoringProgram';
import { MedicationKnowledgeMonograph } from './MedicationKnowledgeMonograph';
import { MedicationKnowledgePackaging } from './MedicationKnowledgePackaging';
import { MedicationKnowledgeRegulatory } from './MedicationKnowledgeRegulatory';
import { MedicationKnowledgeRelatedMedicationKnowledge } from './MedicationKnowledgeRelatedMedicationKnowledge';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * Information about a medication that is used to support knowledge.
 */
export interface MedicationKnowledge extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'MedicationKnowledge';
  /**
   * Guidelines for the administration of the medication.
   */
  administrationGuidelines?: MedicationKnowledgeAdministrationGuidelines[] | undefined;
  /**
   * This is the quantity of medication in a package.  To specify the strength of the medication, the Ingredient.strength attribute is used.
   */
  amount?: Quantity | undefined;
  /**
   * Associated or related medications.  For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor).
   */
  associatedMedication?: Reference[] | undefined;
  /**
   * Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have the coding.userSelected set to true.  As described in the coding datatype: "A coding may be marked as a "userSelected" if a user selected the particular coded value in a user interface (e.g. the user selects an item in a pick-list). If a user selected coding exists, it is the preferred choice for performing translations etc. Other codes can only be literal translations to alternative code systems, or codes at a lower level of granularity (e.g. a generic code for a vendor-specific primary one).
   */
  code?: CodeableConcept | undefined;
  /**
   * Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.).
   */
  contraindication?: Reference[] | undefined;
  /**
   * The price of the medication.
   */
  cost?: MedicationKnowledgeCost[] | undefined;
  /**
   * When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within MedicationDispense, this is the dispensed form.  When Medication is referenced within MedicationAdministration, this is administered form.
   */
  doseForm?: CodeableConcept | undefined;
  /**
   * Specifies descriptive properties of the medicine, such as color, shape, imprints, etc.
   */
  drugCharacteristic?: MedicationKnowledgeDrugCharacteristic[] | undefined;
  /**
   * Identifies a particular constituent of interest in the product.
   */
  ingredient?: MedicationKnowledgeIngredient[] | undefined;
  /**
   * The intended or approved route of administration.
   */
  intendedRoute?: CodeableConcept[] | undefined;
  /**
   * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body.
   */
  kinetics?: MedicationKnowledgeKinetics[] | undefined;
  /**
   * Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.
   */
  manufacturer?: Reference | undefined;
  /**
   * Categorization of the medication within a formulary or classification system.
   */
  medicineClassification?: MedicationKnowledgeMedicineClassification[] | undefined;
  /**
   * The program under which the medication is reviewed.
   */
  monitoringProgram?: MedicationKnowledgeMonitoringProgram[] | undefined;
  /**
   * Associated documentation about the medication.
   */
  monograph?: MedicationKnowledgeMonograph[] | undefined;
  /**
   * Information that only applies to packages (not products).
   */
  packaging?: MedicationKnowledgePackaging | undefined;
  /**
   * The instructions for preparing the medication.
   */
  preparationInstruction?: string | undefined;
  _preparationInstruction?: Element | undefined;
  /**
   * Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.).
   */
  productType?: CodeableConcept[] | undefined;
  /**
   * Regulatory information about a medication.
   */
  regulatory?: MedicationKnowledgeRegulatory[] | undefined;
  /**
   * Associated or related knowledge about a medication.
   */
  relatedMedicationKnowledge?: MedicationKnowledgeRelatedMedicationKnowledge[] | undefined;
  /**
   * This status is intended to identify if the medication in a local system is in active use within a drug database or inventory.  For example, a pharmacy system may create a new drug file record for a compounded product "ABC Hospital Special Cream" with an active status.  At some point in the future, it may be determined that the drug record was created with an error and the status is changed to "entered in error".   This status is not intended to specify if a medication is part of a particular formulary.  It is possible that the drug record may be referenced by multiple formularies or catalogues and each of those entries would have a separate status.
   */
  status?: ('active'|'inactive'|'entered-in-error') | undefined;
  _status?: Element | undefined;
  /**
   * Additional names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol.
   */
  synonym?: string[] | undefined;
  _synonym?: Element[] | undefined;

}