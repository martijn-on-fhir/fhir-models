import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * A description of the size of the sample involved in the synthesis.
 */
export interface RiskEvidenceSynthesisSampleSize extends BackboneElement {

  /**
   * Human-readable summary of sample size.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Number of participants included in this evidence synthesis.
   */
  numberOfParticipants?: number | undefined;
  /**
   * Number of studies included in this evidence synthesis.
   */
  numberOfStudies?: number | undefined;

}