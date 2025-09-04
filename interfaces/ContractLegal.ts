import { Attachment } from './Attachment';
import { BackboneElement } from './BackboneElement';
import { Reference } from './Reference';

/**
 * List of Legal expressions or representations of this Contract.
 */
export interface ContractLegal extends BackboneElement {

  /**
   * Contract legal text in human renderable form.
   */
  contentAttachment?: Attachment | undefined;
  /**
   * Contract legal text in human renderable form.
   */
  contentReference?: Reference | undefined;

}