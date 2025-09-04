import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { PlanDefinitionGoalTarget } from './PlanDefinitionGoalTarget';
import { RelatedArtifact } from './RelatedArtifact';

/**
 * Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 */
export interface PlanDefinitionGoal extends BackboneElement {

  /**
   * Identifies problems, conditions, issues, or concerns the goal is intended to address.
   */
  addresses?: CodeableConcept[] | undefined;
  /**
   * Indicates a category the goal falls within.
   */
  category?: CodeableConcept | undefined;
  /**
   * If no code is available, use CodeableConcept.text.
   */
  description: CodeableConcept;
  /**
   * Didactic or other informational resources associated with the goal that provide further supporting information about the goal. Information resources can include inline text commentary and links to web resources.
   */
  documentation?: RelatedArtifact[] | undefined;
  /**
   * Identifies the expected level of importance associated with reaching/sustaining the defined goal.
   */
  priority?: CodeableConcept | undefined;
  /**
   * The event after which the goal should begin being pursued.
   */
  start?: CodeableConcept | undefined;
  /**
   * Indicates what should be done and within what timeframe.
   */
  target?: PlanDefinitionGoalTarget[] | undefined;

}