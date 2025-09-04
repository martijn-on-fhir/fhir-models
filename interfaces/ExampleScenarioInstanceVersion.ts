import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * A specific version of the resource.
 */
export interface ExampleScenarioInstanceVersion extends BackboneElement {

  /**
   * The description of the resource version.
   */
  description: string;
  _description?: Element | undefined;
  /**
   * The identifier of a specific version of a resource.
   */
  versionId: string;
  _versionId?: Element | undefined;

}