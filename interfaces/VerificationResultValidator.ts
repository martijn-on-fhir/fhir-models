import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { Reference } from './Reference';
import { Signature } from './Signature';

/**
 * Information about the entity validating information.
 */
export interface VerificationResultValidator extends BackboneElement {

  /**
   * Signed assertion by the validator that they have validated the information.
   */
  attestationSignature?: Signature | undefined;
  /**
   * A digital identity certificate associated with the validator.
   */
  identityCertificate?: string | undefined;
  _identityCertificate?: Element | undefined;
  /**
   * Reference to the organization validating information.
   */
  organization: Reference;

}