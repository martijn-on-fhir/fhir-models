import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Codes associated with the substance.
 */
export interface SubstanceSpecificationCode extends BackboneElement {

  /**
   * The specific code.
   */
  code?: CodeableConcept | undefined;
  /**
   * Any comment can be provided in this field, if necessary.
   */
  comment?: string | undefined;
  _comment?: Element | undefined;
  /**
   * Supporting literature.
   */
  source?: Reference[] | undefined;
  /**
   * Status of the code assignment.
   */
  status?: CodeableConcept | undefined;
  /**
   * The date at which the code status is changed as part of the terminology maintenance.
   */
  statusDate?: string | undefined;
  _statusDate?: Element | undefined;

}