import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * The resources controlled by this rule if specific resources are referenced.
 */
export interface ConsentProvisionData extends BackboneElement {

  /**
   * How the resource reference is interpreted when testing consent restrictions.
   */
  meaning: ('instance'|'related'|'dependents'|'authoredby');
  _meaning?: Element | undefined;
  /**
   * A reference to a specific resource that defines which resources are covered by this consent.
   */
  reference: Reference;

}