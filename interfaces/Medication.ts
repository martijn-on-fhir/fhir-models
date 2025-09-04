import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { MedicationBatch } from './MedicationBatch';
import { MedicationIngredient } from './MedicationIngredient';
import { Ratio } from './Ratio';
import { Reference } from './Reference';

/**
 * This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
 */
export interface Medication extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Medication';
  /**
   * Specific amount of the drug in the packaged product.  For example, when specifying a product that has the same strength (For example, Insulin glargine 100 unit per mL solution for injection), this attribute provides additional clarification of the package amount (For example, 3 mL, 10mL, etc.).
   */
  amount?: Ratio | undefined;
  /**
   * Information that only applies to packages (not products).
   */
  batch?: MedicationBatch | undefined;
  /**
   * Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have the coding.userSelected set to true.  As described in the coding datatype: "A coding may be marked as a "userSelected" if a user selected the particular coded value in a user interface (e.g. the user selects an item in a pick-list). If a user selected coding exists, it is the preferred choice for performing translations etc. Other codes can only be literal translations to alternative code systems, or codes at a lower level of granularity (e.g. a generic code for a vendor-specific primary one).
   */
  code?: CodeableConcept | undefined;
  /**
   * When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within MedicationDispense, this is the dispensed form.  When Medication is referenced within MedicationAdministration, this is administered form.
   */
  form?: CodeableConcept | undefined;
  /**
   * The serial number could be included as an identifier.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The ingredients need not be a complete list.  If an ingredient is not specified, this does not indicate whether an ingredient is present or absent.  If an ingredient is specified it does not mean that all ingredients are specified.  It is possible to specify both inactive and active ingredients.
   */
  ingredient?: MedicationIngredient[] | undefined;
  /**
   * Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.
   */
  manufacturer?: Reference | undefined;
  /**
   * This status is intended to identify if the medication in a local system is in active use within a drug database or inventory.  For example, a pharmacy system may create a new drug file record for a compounded product "ABC Hospital Special Cream" with an active status.  At some point in the future, it may be determined that the drug record was created with an error and the status is changed to "entered in error".   This status is not intended to specify if a medication is part of a particular formulary.  It is possible that the drug record may be referenced by multiple formularies or catalogues and each of those entries would have a separate status.
   */
  status?: ('active'|'inactive'|'entered-in-error') | undefined;
  _status?: Element | undefined;

}