import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';

/**
 * The program under which the medication is reviewed.
 */
export interface MedicationKnowledgeMonitoringProgram extends BackboneElement {

  /**
   * Name of the reviewing program.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * Type of program under which the medication is monitored.
   */
  type?: CodeableConcept | undefined;

}