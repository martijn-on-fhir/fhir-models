import { Age } from './Age';
import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { DataRequirement } from './DataRequirement';
import { Duration } from './Duration';
import { Element } from './Element';
import { Period } from './Period';
import { PlanDefinitionActionCondition } from './PlanDefinitionActionCondition';
import { PlanDefinitionActionDynamicValue } from './PlanDefinitionActionDynamicValue';
import { PlanDefinitionActionParticipant } from './PlanDefinitionActionParticipant';
import { PlanDefinitionActionRelatedAction } from './PlanDefinitionActionRelatedAction';
import { Range } from './Range';
import { Reference } from './Reference';
import { RelatedArtifact } from './RelatedArtifact';
import { Timing } from './Timing';
import { TriggerDefinition } from './TriggerDefinition';

/**
 * Note that there is overlap between many of the elements defined here and the ActivityDefinition resource. When an ActivityDefinition is referenced (using the definition element), the overlapping elements in the plan override the content of the referenced ActivityDefinition unless otherwise documented in the specific elements. See the PlanDefinition resource for more detailed information.
 */
export interface PlanDefinitionAction extends BackboneElement {

  /**
   * Sub actions that are contained within the action. The behavior of this action determines the functionality of the sub-actions. For example, a selection behavior of at-most-one indicates that of the sub-actions, at most one may be chosen as part of realizing the action definition.
   */
  action?: PlanDefinitionAction[] | undefined;
  /**
   * Defines whether the action can be selected multiple times.
   */
  cardinalityBehavior?: ('single'|'multiple') | undefined;
  _cardinalityBehavior?: Element | undefined;
  /**
   * A code that provides meaning for the action or action group. For example, a section may have a LOINC code for the section of a documentation template.
   */
  code?: CodeableConcept[] | undefined;
  /**
   * When multiple conditions of the same kind are present, the effects are combined using AND semantics, so the overall condition is true only if all the conditions are true.
   */
  condition?: PlanDefinitionActionCondition[] | undefined;
  /**
   * Note that the definition is optional, and if no definition is specified, a dynamicValue with a root ($this) path can be used to define the entire resource dynamically.
   */
  definitionCanonical?: string | undefined;
  _definitionCanonical?: Element | undefined;
  /**
   * Note that the definition is optional, and if no definition is specified, a dynamicValue with a root ($this) path can be used to define the entire resource dynamically.
   */
  definitionUri?: string | undefined;
  _definitionUri?: Element | undefined;
  /**
   * A brief description of the action used to provide a summary to display to the user.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources.
   */
  documentation?: RelatedArtifact[] | undefined;
  /**
   * Dynamic values are applied in the order in which they are defined in the PlanDefinition resource. Note that when dynamic values are also specified by a referenced ActivityDefinition, the dynamicValues from the ActivityDefinition are applied first, followed by the dynamicValues specified here. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
   */
  dynamicValue?: PlanDefinitionActionDynamicValue[] | undefined;
  /**
   * Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition.
   */
  goalId?: string[] | undefined;
  _goalId?: Element[] | undefined;
  /**
   * Defines the grouping behavior for the action and its children.
   */
  groupingBehavior?: ('visual-group'|'logical-group'|'sentence-group') | undefined;
  _groupingBehavior?: Element | undefined;
  /**
   * Defines input data requirements for the action.
   */
  input?: DataRequirement[] | undefined;
  /**
   * Defines the outputs of the action, if any.
   */
  output?: DataRequirement[] | undefined;
  /**
   * Indicates who should participate in performing the action described.
   */
  participant?: PlanDefinitionActionParticipant[] | undefined;
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
   * This is different than the clinical evidence documentation, it's an actual business description of the reason for performing the action.
   */
  reason?: CodeableConcept[] | undefined;
  /**
   * When an action depends on multiple actions, the meaning is that all actions are dependencies, rather than that any of the actions are a dependency.
   */
  relatedAction?: PlanDefinitionActionRelatedAction[] | undefined;
  /**
   * Defines the required behavior for the action.
   */
  requiredBehavior?: ('must'|'could'|'must-unless-documented') | undefined;
  _requiredBehavior?: Element | undefined;
  /**
   * Defines the selection behavior for the action and its children.
   */
  selectionBehavior?: ('any'|'all'|'all-or-none'|'exactly-one'|'at-most-one'|'one-or-more') | undefined;
  _selectionBehavior?: Element | undefined;
  /**
   * The subject of an action overrides the subject at a parent action or on the root of the PlanDefinition if specified.
   * In addition, because the subject needs to be resolved during realization, use of subjects in actions (or in the ActivityDefinition referenced by the action) resolves based on the set of subjects supplied in context and by type (i.e. the patient subject would resolve to a resource of type Patient).
   */
  subjectCodeableConcept?: CodeableConcept | undefined;
  /**
   * The subject of an action overrides the subject at a parent action or on the root of the PlanDefinition if specified.
   * In addition, because the subject needs to be resolved during realization, use of subjects in actions (or in the ActivityDefinition referenced by the action) resolves based on the set of subjects supplied in context and by type (i.e. the patient subject would resolve to a resource of type Patient).
   */
  subjectReference?: Reference | undefined;
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
   * Note that when a referenced ActivityDefinition also defines a transform, the transform specified here generally takes precedence. In addition, if both a transform and dynamic values are specific, the dynamic values are applied to the result of the transform.
   */
  transform?: string | undefined;
  _transform?: Element | undefined;
  /**
   * A description of when the action should be triggered.
   */
  trigger?: TriggerDefinition[] | undefined;
  /**
   * The type of action to perform (create, update, remove).
   */
  type?: CodeableConcept | undefined;

}