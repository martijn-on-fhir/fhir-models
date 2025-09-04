import { BackboneElement } from './BackboneElement';
import { Duration } from './Duration';
import { Element } from './Element';
import { Range } from './Range';

/**
 * A relationship to another action such as "before" or "30-60 minutes after start of".
 */
export interface RequestGroupActionRelatedAction extends BackboneElement {

  /**
   * The element id of the action this is related to.
   */
  actionId: string;
  _actionId?: Element | undefined;
  /**
   * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
   */
  offsetDuration?: Duration | undefined;
  /**
   * A duration or range of durations to apply to the relationship. For example, 30-60 minutes before.
   */
  offsetRange?: Range | undefined;
  /**
   * The relationship of this action to the related action.
   */
  relationship: ('before-start'|'before'|'before-end'|'concurrent-with-start'|'concurrent'|'concurrent-with-end'|'after-start'|'after'|'after-end');
  _relationship?: Element | undefined;

}