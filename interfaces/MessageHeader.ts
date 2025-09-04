import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { MessageHeaderDestination } from './MessageHeaderDestination';
import { MessageHeaderResponse } from './MessageHeaderResponse';
import { MessageHeaderSource } from './MessageHeaderSource';
import { Reference } from './Reference';

/**
 * The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.
 */
export interface MessageHeader extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'MessageHeader';
  /**
   * Usually only for the request but can be used in a response.
   */
  author?: Reference | undefined;
  /**
   * Permanent link to the MessageDefinition for this message.
   */
  definition?: string | undefined;
  _definition?: Element | undefined;
  /**
   * There SHOULD be at least one destination, but in some circumstances, the source system is unaware of any particular destination system.
   */
  destination?: MessageHeaderDestination[] | undefined;
  /**
   * Usually only for the request but can be used in a response.
   */
  enterer?: Reference | undefined;
  /**
   * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
   */
  eventCoding?: Coding | undefined;
  /**
   * The time of the event will be found in the focus resource. The time of the message will be found in [Bundle.timestamp](bundle-definitions.html#Bundle.timestamp).
   */
  eventUri?: string | undefined;
  _eventUri?: Element | undefined;
  /**
   * The data is defined where the transaction type is defined. The transaction data is always included in the bundle that is the full message.  Only the root resource is specified.  The resources it references should be contained in the bundle but are not also listed here.  Multiple repetitions are allowed to cater for merges and other situations with multiple focal targets.
   */
  focus?: Reference[] | undefined;
  /**
   * Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message.
   */
  reason?: CodeableConcept | undefined;
  /**
   * Information about the message that this message is a response to.  Only present if this message is a response.
   */
  response?: MessageHeaderResponse | undefined;
  /**
   * Usually only for the request but can be used in a response.
   */
  responsible?: Reference | undefined;
  /**
   * Use case is for where a (trusted) sending system is responsible for multiple organizations, and therefore cannot differentiate based on source endpoint / authentication alone.
   */
  sender?: Reference | undefined;
  /**
   * The source application from which this message originated.
   */
  source: MessageHeaderSource;

}