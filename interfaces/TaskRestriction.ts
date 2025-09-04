import { BackboneElement } from './BackboneElement';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned.
 */
export interface TaskRestriction extends BackboneElement {

  /**
   * Note that period.high is the due date representing the time by which the task should be completed.
   */
  period?: Period | undefined;
  /**
   * For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought?
   */
  recipient?: Reference[] | undefined;
  /**
   * Indicates the number of times the requested action should occur.
   */
  repetitions?: number | undefined;

}