import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { CommunicationRequestPayload } from './CommunicationRequestPayload';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.
 */
export interface CommunicationRequest extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'CommunicationRequest';
  /**
   * Don't use CommunicationRequest.about element when a more specific element exists, such as basedOn, reasonReference, or replaces.
   */
  about?: Reference[] | undefined;
  /**
   * For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.
   */
  authoredOn?: string | undefined;
  _authoredOn?: Element | undefined;
  /**
   * A plan or proposal that is fulfilled in whole or in part by this request.
   */
  basedOn?: Reference[] | undefined;
  /**
   * There may be multiple axes of categorization and one communication request may serve multiple purposes.
   */
  category?: CodeableConcept[] | undefined;
  /**
   * The attributes provided with the request qualify what is not to be done.
   */
  doNotPerform?: boolean | undefined;
  _doNotPerform?: Element | undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
   */
  encounter?: Reference | undefined;
  /**
   * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
   */
  groupIdentifier?: Identifier | undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: Identifier[] | undefined;
  /**
   * A channel that was used for this communication (e.g. email, fax).
   */
  medium?: CodeableConcept[] | undefined;
  /**
   * Comments made about the request by the requester, sender, recipient, subject or other participants.
   */
  note?: Annotation[] | undefined;
  /**
   * The time when this communication is to occur.
   */
  occurrenceDateTime?: string | undefined;
  _occurrenceDateTime?: Element | undefined;
  /**
   * The time when this communication is to occur.
   */
  occurrencePeriod?: Period | undefined;
  /**
   * Text, attachment(s), or resource(s) to be communicated to the recipient.
   */
  payload?: CommunicationRequestPayload[] | undefined;
  /**
   * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
   */
  priority?: ('routine'|'urgent'|'asap'|'stat') | undefined;
  _priority?: Element | undefined;
  /**
   * Textual reasons can be captured using reasonCode.text.
   */
  reasonCode?: CodeableConcept[] | undefined;
  /**
   * Indicates another resource whose existence justifies this request.
   */
  reasonReference?: Reference[] | undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.
   */
  recipient?: Reference[] | undefined;
  /**
   * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
   */
  replaces?: Reference[] | undefined;
  /**
   * The device, individual, or organization who initiated the request and has responsibility for its activation.
   */
  requester?: Reference | undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
   */
  sender?: Reference | undefined;
  /**
   * The status of the proposal or order.
   */
  status: ('draft'|'active'|'on-hold'|'revoked'|'completed'|'entered-in-error'|'unknown');
  _status?: Element | undefined;
  /**
   * This is generally only used for "exception" statuses such as "suspended" or "cancelled".  The reason why the CommunicationRequest was created at all is captured in reasonCode, not here.  [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
   */
  statusReason?: CodeableConcept | undefined;
  /**
   * The patient or group that is the focus of this communication request.
   */
  subject?: Reference | undefined;

}