import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { ExampleScenarioProcess } from './ExampleScenarioProcess';
import { ExampleScenarioProcessStepAlternative } from './ExampleScenarioProcessStepAlternative';
import { ExampleScenarioProcessStepOperation } from './ExampleScenarioProcessStepOperation';

/**
 * Each step of the process.
 */
export interface ExampleScenarioProcessStep extends BackboneElement {

  /**
   * Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances.
   */
  alternative?: ExampleScenarioProcessStepAlternative[] | undefined;
  /**
   * Each interaction or action.
   */
  operation?: ExampleScenarioProcessStepOperation | undefined;
  /**
   * If there is a pause in the flow.
   */
  pause?: boolean | undefined;
  _pause?: Element | undefined;
  /**
   * Nested process.
   */
  process?: ExampleScenarioProcess[] | undefined;

}