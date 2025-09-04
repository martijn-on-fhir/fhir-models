import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Period } from './Period';

/**
 * The current status is always found in the current version of the resource, not the status history.
 */
export interface EncounterStatusHistory extends BackboneElement {

  /**
   * The time that the episode was in the specified status.
   */
  period: Period;
  /**
   * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
   */
  status: ('planned'|'arrived'|'triaged'|'in-progress'|'onleave'|'finished'|'cancelled'|'entered-in-error'|'unknown');
  _status?: Element | undefined;

}