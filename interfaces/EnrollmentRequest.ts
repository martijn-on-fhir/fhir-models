import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
 */
export interface EnrollmentRequest extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'EnrollmentRequest';
  /**
   * Patient Resource.
   */
  candidate?: Reference | undefined;
  /**
   * Reference to the program or plan identification, underwriter or payor.
   */
  coverage?: Reference | undefined;
  /**
   * The date when this resource was created.
   */
  created?: string | undefined;
  _created?: Element | undefined;
  /**
   * The Response business identifier.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The Insurer who is target  of the request.
   */
  insurer?: Reference | undefined;
  /**
   * The practitioner who is responsible for the services rendered to the patient.
   */
  provider?: Reference | undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the request as not currently valid.
   */
  status?: ('active'|'cancelled'|'draft'|'entered-in-error') | undefined;
  _status?: Element | undefined;

}