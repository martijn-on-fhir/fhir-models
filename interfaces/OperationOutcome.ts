import { DomainResource } from './DomainResource';
import { OperationOutcomeIssue } from './OperationOutcomeIssue';

/**
 * A collection of error, warning, or information messages that result from a system action.
 */
export interface OperationOutcome extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'OperationOutcome';
  /**
   * An error, warning, or information message that results from a system action.
   */
  issue: OperationOutcomeIssue[];

}