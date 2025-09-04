import { AdverseEventSuspectEntityCausality } from './AdverseEventSuspectEntityCausality';
import { BackboneElement } from './BackboneElement';
import { Reference } from './Reference';

/**
 * Describes the entity that is suspected to have caused the adverse event.
 */
export interface AdverseEventSuspectEntity extends BackboneElement {

  /**
   * Information on the possible cause of the event.
   */
  causality?: AdverseEventSuspectEntityCausality[] | undefined;
  /**
   * Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device.
   */
  instance: Reference;

}