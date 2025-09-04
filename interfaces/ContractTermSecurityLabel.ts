import { BackboneElement } from './BackboneElement';
import { Coding } from './Coding';

/**
 * Security labels that protect the handling of information about the term and its elements, which may be specifically identified..
 */
export interface ContractTermSecurityLabel extends BackboneElement {

  /**
   * Security label privacy tag that species the applicable privacy and security policies governing this term and/or term elements.
   */
  category?: Coding[] | undefined;
  /**
   * Security label privacy tag that species the level of confidentiality protection required for this term and/or term elements.
   */
  classification: Coding;
  /**
   * Security label privacy tag that species the manner in which term and/or term elements are to be protected.
   */
  control?: Coding[] | undefined;
  /**
   * Number used to link this term or term element to the applicable Security Label.
   */
  number?: number[] | undefined;

}