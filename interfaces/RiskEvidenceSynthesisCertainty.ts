import { Annotation } from './Annotation';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { RiskEvidenceSynthesisCertaintyCertaintySubcomponent } from './RiskEvidenceSynthesisCertaintyCertaintySubcomponent';

/**
 * A description of the certainty of the risk estimate.
 */
export interface RiskEvidenceSynthesisCertainty extends BackboneElement {

  /**
   * A description of a component of the overall certainty.
   */
  certaintySubcomponent?: RiskEvidenceSynthesisCertaintyCertaintySubcomponent[] | undefined;
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  note?: Annotation[] | undefined;
  /**
   * A rating of the certainty of the effect estimate.
   */
  rating?: CodeableConcept[] | undefined;

}