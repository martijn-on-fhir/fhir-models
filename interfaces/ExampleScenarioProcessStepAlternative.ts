import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { ExampleScenarioProcessStep } from './ExampleScenarioProcessStep';

/**
 * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances.
 */
export interface ExampleScenarioProcessStepAlternative extends BackboneElement {

  /**
   * A human-readable description of the alternative explaining when the alternative should occur rather than the base step.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * What happens in each alternative option.
   */
  step?: ExampleScenarioProcessStep[] | undefined;
  /**
   * The label to display for the alternative that gives a sense of the circumstance in which the alternative should be invoked.
   */
  title: string;
  _title?: Element | undefined;

}