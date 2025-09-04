import { BackboneElement } from './BackboneElement';
import { Duration } from './Duration';
import { Element } from './Element';
import { Range } from './Range';

/**
 * When an action depends on multiple actions, the meaning is that all actions are dependencies, rather than that any of the actions are a dependency.
 */
export interface PlanDefinitionActionRelatedAction extends BackboneElement {

  /**
   * The element id of the related action.
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