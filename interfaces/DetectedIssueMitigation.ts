import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Reference } from './Reference';

/**
 * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
 */
export interface DetectedIssueMitigation extends BackboneElement {

  /**
   * The "text" component can be used for detail or when no appropriate code exists.
   */
  action: CodeableConcept;
  /**
   * Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
   */
  author?: Reference | undefined;
  /**
   * This might not be the same as when the mitigating step was actually taken.
   */
  date?: string | undefined;
  _date?: Element | undefined;

}