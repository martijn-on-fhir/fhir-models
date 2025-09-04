import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Only list each attester once.
 */
export interface CompositionAttester extends BackboneElement {

  /**
   * The type of attestation the authenticator offers.
   */
  mode: ('personal'|'professional'|'legal'|'official');
  _mode?: Element | undefined;
  /**
   * Who attested the composition in the specified way.
   */
  party?: Reference | undefined;
  /**
   * When the composition was attested by the party.
   */
  time?: string | undefined;
  _time?: Element | undefined;

}