import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Period } from './Period';

/**
 * The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource).
 */
export interface EpisodeOfCareStatusHistory extends BackboneElement {

  /**
   * The period during this EpisodeOfCare that the specific status applied.
   */
  period: Period;
  /**
   * planned | waitlist | active | onhold | finished | cancelled.
   */
  status: ('planned'|'waitlist'|'active'|'onhold'|'finished'|'cancelled'|'entered-in-error');
  _status?: Element | undefined;

}