import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Procedures performed on the patient relevant to the billing items with the claim.
 */
export interface ClaimProcedure extends BackboneElement {

  /**
   * Date and optionally time the procedure was performed.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * The code or reference to a Procedure resource which identifies the clinical intervention performed.
   */
  procedureCodeableConcept?: CodeableConcept | undefined;
  /**
   * The code or reference to a Procedure resource which identifies the clinical intervention performed.
   */
  procedureReference?: Reference | undefined;
  /**
   * A number to uniquely identify procedure entries.
   */
  sequence: number;
  /**
   * For example: primary, secondary.
   */
  type?: CodeableConcept[] | undefined;
  /**
   * Unique Device Identifiers associated with this line item.
   */
  udi?: Reference[] | undefined;

}