import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * A device that is implanted, removed or otherwise manipulated (calibration, battery replacement, fitting a prosthesis, attaching a wound-vac, etc.) as a focal portion of the Procedure.
 */
export interface ProcedureFocalDevice extends BackboneElement {

  /**
   * The kind of change that happened to the device during the procedure.
   */
  action?: CodeableConcept | undefined;
  /**
   * The device that was manipulated (changed) during the procedure.
   */
  manipulated: Reference;

}