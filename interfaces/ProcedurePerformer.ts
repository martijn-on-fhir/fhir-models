import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * Limited to "real" people rather than equipment.
 */
export interface ProcedurePerformer extends BackboneElement {

  /**
   * The practitioner who was involved in the procedure.
   */
  actor: Reference;
  /**
   * Distinguishes the type of involvement of the performer in the procedure. For example, surgeon, anaesthetist, endoscopist.
   */
  function?: CodeableConcept | undefined;
  /**
   * The organization the device or practitioner was acting on behalf of.
   */
  onBehalfOf?: Reference | undefined;

}