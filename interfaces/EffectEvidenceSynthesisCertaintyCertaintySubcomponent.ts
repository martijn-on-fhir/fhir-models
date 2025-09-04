import { Annotation } from './Annotation';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';

/**
 * A description of a component of the overall certainty.
 */
export interface EffectEvidenceSynthesisCertaintyCertaintySubcomponent extends BackboneElement {

  /**
   * A human-readable string to clarify or explain concepts about the resource.
   */
  note?: Annotation[] | undefined;
  /**
   * A rating of a subcomponent of rating certainty.
   */
  rating?: CodeableConcept[] | undefined;
  /**
   * Type of subcomponent of certainty rating.
   */
  type?: CodeableConcept | undefined;

}