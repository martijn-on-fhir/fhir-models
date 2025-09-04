import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * The list of diagnosis relevant to this encounter.
 */
export interface EncounterDiagnosis extends BackboneElement {

  /**
   * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryDiagnosis (which is a sequence value rather than a flag, 1 = primary diagnosis).
   */
  condition: Reference;
  /**
   * Ranking of the diagnosis (for each role type).
   */
  rank?: number | undefined;
  /**
   * Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …).
   */
  use?: CodeableConcept | undefined;

}