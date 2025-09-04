import { Attachment } from './Attachment';
import { BackboneElement } from './BackboneElement';
import { Reference } from './Reference';

/**
 * The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement.
 */
export interface ContractFriendly extends BackboneElement {

  /**
   * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
   */
  contentAttachment?: Attachment | undefined;
  /**
   * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure understandability.
   */
  contentReference?: Reference | undefined;

}