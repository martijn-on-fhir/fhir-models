import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Reference } from './Reference';
import { Timing } from './Timing';
import { VerificationResultAttestation } from './VerificationResultAttestation';
import { VerificationResultPrimarySource } from './VerificationResultPrimarySource';
import { VerificationResultValidator } from './VerificationResultValidator';

/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
export interface VerificationResult extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'VerificationResult';
  /**
   * Information about the entity attesting to information.
   */
  attestation?: VerificationResultAttestation | undefined;
  /**
   * The result if validation fails (fatal; warning; record only; none).
   */
  failureAction?: CodeableConcept | undefined;
  /**
   * Frequency of revalidation.
   */
  frequency?: Timing | undefined;
  /**
   * The date/time validation was last completed (including failed validations).
   */
  lastPerformed?: string | undefined;
  _lastPerformed?: Element | undefined;
  /**
   * The frequency with which the target must be validated (none; initial; periodic).
   */
  need?: CodeableConcept | undefined;
  /**
   * The date when target is next validated, if appropriate.
   */
  nextScheduled?: string | undefined;
  _nextScheduled?: Element | undefined;
  /**
   * Information about the primary source(s) involved in validation.
   */
  primarySource?: VerificationResultPrimarySource[] | undefined;
  /**
   * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
   */
  status: ('attested'|'validated'|'in-process'|'req-revalid'|'val-fail'|'reval-fail');
  _status?: Element | undefined;
  /**
   * When the validation status was updated.
   */
  statusDate?: string | undefined;
  _statusDate?: Element | undefined;
  /**
   * A resource that was validated.
   */
  target?: Reference[] | undefined;
  /**
   * The fhirpath location(s) within the resource that was validated.
   */
  targetLocation?: string[] | undefined;
  _targetLocation?: Element[] | undefined;
  /**
   * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).
   */
  validationProcess?: CodeableConcept[] | undefined;
  /**
   * What the target is validated against (nothing; primary source; multiple sources).
   */
  validationType?: CodeableConcept | undefined;
  /**
   * Information about the entity validating information.
   */
  validator?: VerificationResultValidator[] | undefined;

}