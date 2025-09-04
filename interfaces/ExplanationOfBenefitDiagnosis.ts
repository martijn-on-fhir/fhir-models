import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Information about diagnoses relevant to the claim items.
 */
export interface ExplanationOfBenefitDiagnosis extends BackboneElement {

  /**
   * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  diagnosisCodeableConcept?: CodeableConcept | undefined;
  /**
   * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  diagnosisReference?: Reference | undefined;
  /**
   * Indication of whether the diagnosis was present on admission to a facility.
   */
  onAdmission?: CodeableConcept | undefined;
  /**
   * For example, DRG (Diagnosis Related Group) or a bundled billing code. A patient may have a diagnosis of a Myocardio-infarction and a DRG for HeartAttack would assigned. The Claim item (and possible subsequent claims) would refer to the DRG for those line items that were for services related to the heart attack event.
   */
  packageCode?: CodeableConcept | undefined;
  /**
   * Diagnosis are presented in list order to their expected importance: primary, secondary, etc.
   */
  sequence: number;
  /**
   * For example: admitting, primary, secondary, discharge.
   */
  type?: CodeableConcept[] | undefined;

}