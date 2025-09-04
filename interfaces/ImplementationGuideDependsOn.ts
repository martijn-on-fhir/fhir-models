import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
 */
export interface ImplementationGuideDependsOn extends BackboneElement {

  /**
   * The NPM package name for the Implementation Guide that this IG depends on.
   */
  packageId?: string | undefined;
  _packageId?: Element | undefined;
  /**
   * Usually, A canonical reference to the implementation guide is the same as the master location at which the implementation guide is published.
   */
  uri: string;
  _uri?: Element | undefined;
  /**
   * This follows the syntax of the NPM packaging version field - see [[reference]].
   */
  version?: string | undefined;
  _version?: Element | undefined;

}