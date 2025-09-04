import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';

/**
 * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
 */
export interface ResearchStudyObjective extends BackboneElement {

  /**
   * Unique, human-readable label for this objective of the study.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * The kind of study objective.
   */
  type?: CodeableConcept | undefined;

}