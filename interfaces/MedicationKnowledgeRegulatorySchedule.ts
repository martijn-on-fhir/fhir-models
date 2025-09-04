import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';

/**
 * Specifies the schedule of a medication in jurisdiction.
 */
export interface MedicationKnowledgeRegulatorySchedule extends BackboneElement {

  /**
   * Specifies the specific drug schedule.
   */
  schedule: CodeableConcept;

}