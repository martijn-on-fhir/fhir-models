import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';

/**
 * An error, warning, or information message that results from a system action.
 */
export interface OperationOutcomeIssue extends BackboneElement {

  /**
   * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
   */
  code: string;
  _code?: Element | undefined;
  /**
   * A human readable description of the error issue SHOULD be placed in details.text.
   */
  details?: CodeableConcept | undefined;
  /**
   * This may be a description of how a value is erroneous, a stack dump to help trace the issue or other troubleshooting information.
   */
  diagnostics?: string | undefined;
  _diagnostics?: Element | undefined;
  /**
   * The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a single node.
   */
  expression?: string[] | undefined;
  _expression?: Element[] | undefined;
  /**
   * The root of the XPath is the resource or bundle that generated OperationOutcome.  Each XPath SHALL resolve to a single node.  This element is deprecated, and is being replaced by expression.
   */
  location?: string[] | undefined;
  _location?: Element[] | undefined;
  /**
   * This is labeled as "Is Modifier" because applications should not confuse hints and warnings with errors.
   */
  severity: ('fatal'|'error'|'warning'|'information');
  _severity?: Element | undefined;

}