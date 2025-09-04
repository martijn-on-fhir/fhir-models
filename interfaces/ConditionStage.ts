import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Clinical stage or grade of a condition. May include formal severity assessments.
 */
export interface ConditionStage extends BackboneElement {

  /**
   * Reference to a formal record of the evidence on which the staging assessment is based.
   */
  assessment?: Reference[] | undefined;
  /**
   * A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
   */
  summary?: CodeableConcept | undefined;
  /**
   * The kind of staging, such as pathological or clinical staging.
   */
  type?: CodeableConcept | undefined;

}