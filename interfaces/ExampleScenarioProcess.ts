import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { ExampleScenarioProcessStep } from './ExampleScenarioProcessStep';

/**
 * Each major process - a group of operations.
 */
export interface ExampleScenarioProcess extends BackboneElement {

  /**
   * A longer description of the group of operations.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Description of final status after the process ends.
   */
  postConditions?: string | undefined;
  _postConditions?: Element | undefined;
  /**
   * Description of initial status before the process starts.
   */
  preConditions?: string | undefined;
  _preConditions?: Element | undefined;
  /**
   * Each step of the process.
   */
  step?: ExampleScenarioProcessStep[] | undefined;
  /**
   * The diagram title of the group of operations.
   */
  title: string;
  _title?: Element | undefined;

}