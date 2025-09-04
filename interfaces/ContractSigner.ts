import { BackboneElement } from './BackboneElement';
import { Coding } from './Coding';
import { Reference } from './Reference';
import { Signature } from './Signature';

/**
 * Signers who are principal parties to the contract are bound by the Contract.activity related to the Contract.topic, and the Contract.term(s), which either extend or restrict the overall action on the topic by, for example, stipulating specific policies or obligations constraining actions, action reason, or agents with respect to some or all of the topic.
 * For example, specifying how policies or obligations shall constrain actions and action reasons permitted or denied on all or a subset of the Contract.topic (e.g., all or a portion of property being transferred by the contract), agents (e.g., who can resell, assign interests, or alter the property being transferred by the contract), actions, and action reasons; or with respect to Contract.terms, stipulating, extending, or limiting the Contract.period of applicability or valuation of items under consideration.
 */
export interface ContractSigner extends BackboneElement {

  /**
   * Party which is a signator to this Contract.
   */
  party: Reference;
  /**
   * Legally binding Contract DSIG signature contents in Base64.
   */
  signature: Signature[];
  /**
   * Role of this Contract signer, e.g. notary, grantee.
   */
  type: Coding;

}