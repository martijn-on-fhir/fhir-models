import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Resources contained in the instance (e.g. the observations contained in a bundle).
 */
export interface ExampleScenarioInstanceContainedInstance extends BackboneElement {

  /**
   * Each resource contained in the instance.
   */
  resourceId: string;
  _resourceId?: Element | undefined;
  /**
   * A specific version of a resource contained in the instance.
   */
  versionId?: string | undefined;
  _versionId?: Element | undefined;

}