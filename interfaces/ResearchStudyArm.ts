import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';

/**
 * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
 */
export interface ResearchStudyArm extends BackboneElement {

  /**
   * A succinct description of the path through the study that would be followed by a subject adhering to this arm.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Unique, human-readable label for this arm of the study.
   */
  name: string;
  _name?: Element | undefined;
  /**
   * Categorization of study arm, e.g. experimental, active comparator, placebo comparater.
   */
  type?: CodeableConcept | undefined;

}