import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Patient diagnosis for which care is sought.
 */
export interface CoverageEligibilityRequestItemDiagnosis extends BackboneElement {

  /**
   * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  diagnosisCodeableConcept?: CodeableConcept | undefined;
  /**
   * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  diagnosisReference?: Reference | undefined;

}