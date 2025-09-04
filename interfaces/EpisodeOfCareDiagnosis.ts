import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * The list of diagnosis relevant to this episode of care.
 */
export interface EpisodeOfCareDiagnosis extends BackboneElement {

  /**
   * A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
   */
  condition: Reference;
  /**
   * Ranking of the diagnosis (for each role type).
   */
  rank?: number | undefined;
  /**
   * Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …).
   */
  role?: CodeableConcept | undefined;

}