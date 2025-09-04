import { Annotation } from './Annotation';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { EffectEvidenceSynthesisCertaintyCertaintySubcomponent } from './EffectEvidenceSynthesisCertaintyCertaintySubcomponent';

/**
 * A description of the certainty of the effect estimate.
 */
export interface EffectEvidenceSynthesisCertainty extends BackboneElement {

  /**
   * A description of a component of the overall certainty.
   */
  certaintySubcomponent?: EffectEvidenceSynthesisCertaintyCertaintySubcomponent[] | undefined;
  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  note?: Annotation[] | undefined;
  /**
   * A rating of the certainty of the effect estimate.
   */
  rating?: CodeableConcept[] | undefined;

}