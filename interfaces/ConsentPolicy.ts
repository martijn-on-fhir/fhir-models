import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.
 */
export interface ConsentPolicy extends BackboneElement {

  /**
   * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Directives.
   */
  authority?: string | undefined;
  _authority?: Element | undefined;
  /**
   * This element is for discoverability / documentation and does not modify or qualify the policy rules.
   */
  uri?: string | undefined;
  _uri?: Element | undefined;

}