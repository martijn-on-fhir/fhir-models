import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * For example,  for the original treatment and follow-up exams.
 */
export interface ClaimRelated extends BackboneElement {

  /**
   * Reference to a related claim.
   */
  claim?: Reference | undefined;
  /**
   * For example, Property/Casualty insurer claim # or Workers Compensation case # .
   */
  reference?: Identifier | undefined;
  /**
   * For example, prior claim or umbrella.
   */
  relationship?: CodeableConcept | undefined;

}