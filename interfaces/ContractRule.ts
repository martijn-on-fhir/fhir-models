import { Attachment } from './Attachment';
import { BackboneElement } from './BackboneElement';
import { Reference } from './Reference';

/**
 * List of Computable Policy Rule Language Representations of this Contract.
 */
export interface ContractRule extends BackboneElement {

  /**
   * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
   */
  contentAttachment?: Attachment | undefined;
  /**
   * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
   */
  contentReference?: Reference | undefined;

}