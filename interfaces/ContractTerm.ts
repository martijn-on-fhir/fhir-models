import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { ContractTermAction } from './ContractTermAction';
import { ContractTermAsset } from './ContractTermAsset';
import { ContractTermOffer } from './ContractTermOffer';
import { ContractTermSecurityLabel } from './ContractTermSecurityLabel';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups.
 */
export interface ContractTerm extends BackboneElement {

  /**
   * Several agents may be associated (i.e. has some responsibility for an activity) with an activity and vice-versa.
   * For example, in cases of actions initiated by one user for other users, or in events that involve more than one user, hardware device, software, or system process. However, only one user may be the initiator/requestor for the event.
   */
  action?: ContractTermAction[] | undefined;
  /**
   * Relevant time or time-period when this Contract Provision is applicable.
   */
  applies?: Period | undefined;
  /**
   * Contract Term Asset List.
   */
  asset?: ContractTermAsset[] | undefined;
  /**
   * Nested group of Contract Provisions.
   */
  group?: ContractTerm[] | undefined;
  /**
   * Unique identifier for this particular Contract Provision.
   */
  identifier?: Identifier | undefined;
  /**
   * When this Contract Provision was issued.
   */
  issued?: string | undefined;
  _issued?: Element | undefined;
  /**
   * The matter of concern in the context of this provision of the agrement.
   */
  offer: ContractTermOffer;
  /**
   * Security labels that protect the handling of information about the term and its elements, which may be specifically identified..
   */
  securityLabel?: ContractTermSecurityLabel[] | undefined;
  /**
   * A specialized legal clause or condition based on overarching contract type.
   */
  subType?: CodeableConcept | undefined;
  /**
   * Statement of a provision in a policy or a contract.
   */
  text?: string | undefined;
  _text?: Element | undefined;
  /**
   * The entity that the term applies to.
   */
  topicCodeableConcept?: CodeableConcept | undefined;
  /**
   * The entity that the term applies to.
   */
  topicReference?: Reference | undefined;
  /**
   * A legal clause or condition contained within a contract that requires one or both parties to perform a particular requirement by some specified time or prevents one or both parties from performing a particular requirement by some specified time.
   */
  type?: CodeableConcept | undefined;

}