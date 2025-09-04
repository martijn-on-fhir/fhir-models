import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { ExampleScenarioInstanceContainedInstance } from './ExampleScenarioInstanceContainedInstance';
import { ExampleScenarioInstanceVersion } from './ExampleScenarioInstanceVersion';

/**
 * Each resource and each version that is present in the workflow.
 */
export interface ExampleScenarioInstance extends BackboneElement {

  /**
   * Resources contained in the instance (e.g. the observations contained in a bundle).
   */
  containedInstance?: ExampleScenarioInstanceContainedInstance[] | undefined;
  /**
   * Human-friendly description of the resource instance.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * A short name for the resource instance.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * The id of the resource for referencing.
   */
  resourceId: string;
  _resourceId?: Element | undefined;
  /**
   * The type of the resource.
   */
  resourceType: string;
  _resourceType?: Element | undefined;
  /**
   * A specific version of the resource.
   */
  version?: ExampleScenarioInstanceVersion[] | undefined;

}