import { DataRequirement } from './DataRequirement';
import { Element } from './Element';
import { Expression } from './Expression';
import { Reference } from './Reference';
import { Timing } from './Timing';

/**
 * A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.
 */
export interface TriggerDefinition extends Element {

  /**
   * This element can be only be specified for data type triggers and provides additional semantics for the trigger. The context available within the condition is based on the type of data event. For all events, the current resource will be available as context. In addition, for modification events, the previous resource will also be available. The expression may be inlined, or may be a simple absolute URI, which is a reference to a named expression within a logic library referenced by a library element or extension within the containing resource. If the expression is a FHIR Path expression, it evaluates in the context of a resource of one of the type identified in the data requirement, and may also refer to the variable %previous for delta comparisons on events of type data-changed, data-modified, and data-deleted which will always have the same type.
   */
  condition?: Expression | undefined;
  /**
   * This element shall be present for any data type trigger.
   */
  data?: DataRequirement[] | undefined;
  /**
   * An event name can be provided for all event types, but is required for named events. If a name is provided for a type other than named events, it is considered to be a shorthand for the semantics described by the formal description of the event.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * The timing of the event (if this is a periodic trigger).
   */
  timingTiming?: Timing | undefined;
  /**
   * The timing of the event (if this is a periodic trigger).
   */
  timingReference?: Reference | undefined;
  /**
   * The timing of the event (if this is a periodic trigger).
   */
  timingDate?: string | undefined;
  _timingDate?: Element | undefined;
  /**
   * The timing of the event (if this is a periodic trigger).
   */
  timingDateTime?: string | undefined;
  _timingDateTime?: Element | undefined;
  /**
   * The type of triggering event.
   */
  type: ('named-event'|'periodic'|'data-changed'|'data-added'|'data-modified'|'data-removed'|'data-accessed'|'data-access-ended');
  _type?: Element | undefined;

}