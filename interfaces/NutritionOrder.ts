import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { NutritionOrderEnteralFormula } from './NutritionOrderEnteralFormula';
import { NutritionOrderOralDiet } from './NutritionOrderOralDiet';
import { NutritionOrderSupplement } from './NutritionOrderSupplement';
import { Reference } from './Reference';
import { This } from './This';

/**
 * A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.
 */
export interface NutritionOrder extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'NutritionOrder';
  /**
   * Information on a patient's food allergies and intolerances to inform healthcare personnel about the type of foods that the patient shouldn't receive or consume.
   */
  allergyIntolerance?: Reference[] | undefined;
  /**
   * The date and time that this nutrition order was requested.
   */
  dateTime: string;
  _dateTime?: Element | undefined;
  /**
   * An encounter that provides additional information about the healthcare context in which this request is made.
   */
  encounter?: Reference | undefined;
  /**
   * Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity.
   */
  enteralFormula?: NutritionOrderEnteralFormula | undefined;
  /**
   * Information on a patient's food allergies, intolerances and preferences to inform healthcare personnel about the type  of foods that the patient shouldn't receive or consume.
   */
  excludeFoodModifier?: CodeableConcept[] | undefined;
  /**
   * Information on a patient's food preferences that inform healthcare personnel about the food that the patient should receive or consume.
   */
  foodPreferenceModifier?: CodeableConcept[] | undefined;
  /**
   * The Identifier.type element can be to indicate filler vs. placer if needed.  This is explained in further detail [here](servicerequest.html#notes).
   */
  identifier?: Identifier[] | undefined;
  /**
   * The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder.
   */
  instantiates?: string[] | undefined;
  _instantiates?: Element[] | undefined;
  /**
   * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  instantiatesCanonical?: string[] | undefined;
  _instantiatesCanonical?: Element[] | undefined;
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: string[] | undefined;
  _instantiatesUri?: Element[] | undefined;
  /**
   * When resources map to this element, they are free to define as many codes as necessary to cover their space and will map to "proposal, plan or order".  Can have multiple codes that map to one of these.  E.g. "original order", "encoded order", "reflex order" would all map to "order".  Expectation is that the set of codes is mutually exclusive or a strict all-encompassing hierarchy.
   */
  intent: ('proposal'|'plan'|'directive'|'order'|'original-order'|'reflex-order'|'filler-order'|'instance-order'|'option');
  _intent?: Element | undefined;
  /**
   * This element SHALL NOT be used to supply free text instructions for the diet which are represented in the `.oralDiet.instruction`, `supplement.instruction`, or `enteralFormula.administrationInstruction` elements.
   */
  note?: Annotation[] | undefined;
  /**
   * Diet given orally in contrast to enteral (tube) feeding.
   */
  oralDiet?: NutritionOrderOralDiet | undefined;
  /**
   * The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings.
   */
  orderer?: Reference | undefined;
  /**
   * The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding.
   */
  patient: Reference;
  /**
   * Typically the system placing the order sets the status to "requested". Thereafter, the order is maintained by the receiver that updates the status as the request is handled.  This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ('draft'|'active'|'on-hold'|'revoked'|'completed'|'entered-in-error'|'unknown');
  _status?: Element | undefined;
  /**
   * Oral nutritional products given in order to add further nutritional value to the patient's diet.
   */
  supplement?: NutritionOrderSupplement[] | undefined;

}