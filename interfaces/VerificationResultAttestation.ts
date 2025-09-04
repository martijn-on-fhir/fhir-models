import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Reference } from './Reference';
import { Signature } from './Signature';

/**
 * Information about the entity attesting to information.
 */
export interface VerificationResultAttestation extends BackboneElement {

  /**
   * The method by which attested information was submitted/retrieved (manual; API; Push).
   */
  communicationMethod?: CodeableConcept | undefined;
  /**
   * The date the information was attested to.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * When the who is asserting on behalf of another (organization or individual).
   */
  onBehalfOf?: Reference | undefined;
  /**
   * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
   */
  proxyIdentityCertificate?: string | undefined;
  _proxyIdentityCertificate?: Element | undefined;
  /**
   * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
   */
  proxySignature?: Signature | undefined;
  /**
   * A digital identity certificate associated with the attestation source.
   */
  sourceIdentityCertificate?: string | undefined;
  _sourceIdentityCertificate?: Element | undefined;
  /**
   * Signed assertion by the attestation source that they have attested to the information.
   */
  sourceSignature?: Signature | undefined;
  /**
   * The individual or organization attesting to information.
   */
  who?: Reference | undefined;

}