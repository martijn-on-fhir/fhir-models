import { Age } from './Age';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Duration } from './Duration';
import { Element } from './Element';
import { Period } from './Period';
import { Range } from './Range';
import { Reference } from './Reference';
import { RelatedArtifact } from './RelatedArtifact';
import { RequestGroupActionCondition } from './RequestGroupActionCondition';
import { RequestGroupActionRelatedAction } from './RequestGroupActionRelatedAction';
import { Timing } from './Timing';

/**
 * The actions, if any, produced by the evaluation of the artifact.
 */
export interface RequestGroupAction extends BackboneElement {

  /**
   * Sub actions.
   */
  action?: RequestGroupAction[] | undefined;
  /**
   * Defines whether the action can be selected multiple times.
   */
  cardinalityBehavior?: ('single'|'multiple') | undefined;
  _cardinalityBehavior?: Element | undefined;
  /**
   * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a section of a documentation template.
   */
  code?: CodeableConcept[] | undefined;
  /**
   * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all of the conditions are true.
   */
  condition?: RequestGroupActionCondition[] | undefined;
  /**
   * A short description of the action used to provide a summary to display to the user.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
   */
  documentation?: RelatedArtifact[] | undefined;
  /**
   * Defines the grouping behavior for the action and its children.
   */
  groupingBehavior?: ('visual-group'|'logical-group'|'sentence-group') | undefined;
  _groupingBehavior?: Element | undefined;
  /**
   * The participant that should perform or be responsible for this action.
   */
  participant?: Reference[] | undefined;
  /**
   * Defines whether the action should usually be preselected.
   */
  precheckBehavior?: ('yes'|'no') | undefined;
  _precheckBehavior?: Element | undefined;
  /**
   * A user-visible prefix for the action.
   */
  prefix?: string | undefined;
  _prefix?: Element | undefined;
  /**
   * Indicates how quickly the action should be addressed with respect to other actions.
   */
  priority?: ('routine'|'urgent'|'asap'|'stat') | undefined;
  _priority?: Element | undefined;
  /**
   * A relationship to another action such as "before" or "30-60 minutes after start of".
   */
  relatedAction?: RequestGroupActionRelatedAction[] | undefined;
  /**
   * Defines expectations around whether an action is required.
   */
  requiredBehavior?: ('must'|'could'|'must-unless-documented') | undefined;
  _requiredBehavior?: Element | undefined;
  /**
   * The target resource SHALL be a [Request](request.html) resource with a Request.intent set to "option".
   */
  resource?: Reference | undefined;
  /**
   * Defines the selection behavior for the action and its children.
   */
  selectionBehavior?: ('any'|'all'|'all-or-none'|'exactly-one'|'at-most-one'|'one-or-more') | undefined;
  _selectionBehavior?: Element | undefined;
  /**
   * A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically.
   */
  textEquivalent?: string | undefined;
  _textEquivalent?: Element | undefined;
  /**
   * An optional value describing when the action should be performed.
   */
  timingDateTime?: string | undefined;
  _timingDateTime?: Element | undefined;
  /**
   * An optional value describing when the action should be performed.
   */
  timingAge?: Age | undefined;
  /**
   * An optional value describing when the action should be performed.
   */
  timingPeriod?: Period | undefined;
  /**
   * An optional value describing when the action should be performed.
   */
  timingDuration?: Duration | undefined;
  /**
   * An optional value describing when the action should be performed.
   */
  timingRange?: Range | undefined;
  /**
   * An optional value describing when the action should be performed.
   */
  timingTiming?: Timing | undefined;
  /**
   * The title of the action displayed to a user.
   */
  title?: string | undefined;
  _title?: Element | undefined;
  /**
   * The type of action to perform (create, update, remove).
   */
  type?: CodeableConcept | undefined;

}