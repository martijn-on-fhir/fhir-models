import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
 */
export interface ImplementationGuideGlobal extends BackboneElement {

  /**
   * A reference to the profile that all instances must conform to.
   */
  profile: string;
  _profile?: Element | undefined;
  /**
   * The type must match that of the profile that is referred to but is made explicit here as a denormalization so that a system processing the implementation guide resource knows which resources the profile applies to even if the profile itself is not available.
   */
  type: string;
  _type?: Element | undefined;

}