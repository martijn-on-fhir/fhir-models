import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 */
export interface EnrollmentResponse extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'EnrollmentResponse';
  /**
   * The date when the enclosed suite of services were performed or completed.
   */
  created?: string | undefined;
  _created?: Element | undefined;
  /**
   * A description of the status of the adjudication.
   */
  disposition?: string | undefined;
  _disposition?: Element | undefined;
  /**
   * The Response business identifier.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The Insurer who produced this adjudicated response.
   */
  organization?: Reference | undefined;
  /**
   * Processing status: error, complete.
   */
  outcome?: ('queued'|'complete'|'error'|'partial') | undefined;
  _outcome?: Element | undefined;
  /**
   * Original request resource reference.
   */
  request?: Reference | undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  requestProvider?: Reference | undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the response as not currently valid.
   */
  status?: ('active'|'cancelled'|'draft'|'entered-in-error') | undefined;
  _status?: Element | undefined;

}