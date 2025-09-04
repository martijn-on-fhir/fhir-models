import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { CommunicationPayload } from './CommunicationPayload';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.
 */
export interface Communication extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Communication';
  /**
   * Don't use Communication.about element when a more specific element exists, such as basedOn or reasonReference.
   */
  about?: Reference[] | undefined;
  /**
   * This must point to some sort of a 'Request' resource, such as CarePlan, CommunicationRequest, ServiceRequest, MedicationRequest, etc.
   */
  basedOn?: Reference[] | undefined;
  /**
   * There may be multiple axes of categorization and one communication may serve multiple purposes.
   */
  category?: CodeableConcept[] | undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
   */
  encounter?: Reference | undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Prior communication that this communication is in response to.
   */
  inResponseTo?: Reference[] | undefined;
  /**
   * The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Communication.
   */
  instantiatesCanonical?: string[] | undefined;
  _instantiatesCanonical?: Element[] | undefined;
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: string[] | undefined;
  _instantiatesUri?: Element[] | undefined;
  /**
   * A channel that was used for this communication (e.g. email, fax).
   */
  medium?: CodeableConcept[] | undefined;
  /**
   * Additional notes or commentary about the communication by the sender, receiver or other interested parties.
   */
  note?: Annotation[] | undefined;
  /**
   * Part of this action.
   */
  partOf?: Reference[] | undefined;
  /**
   * Text, attachment(s), or resource(s) that was communicated to the recipient.
   */
  payload?: CommunicationPayload[] | undefined;
  /**
   * Used to prioritize workflow (such as which communication to read first) when the communication is planned or in progress.
   */
  priority?: ('routine'|'urgent'|'asap'|'stat') | undefined;
  _priority?: Element | undefined;
  /**
   * Textual reasons can be captured using reasonCode.text.
   */
  reasonCode?: CodeableConcept[] | undefined;
  /**
   * Indicates another resource whose existence justifies this communication.
   */
  reasonReference?: Reference[] | undefined;
  /**
   * The time when this communication arrived at the destination.
   */
  received?: string | undefined;
  _received?: Element | undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, care team or device) which was the target of the communication. If receipts need to be tracked by an individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either receipts are not tracked (e.g. a mass mail-out) or a receipt is captured in aggregate (all emails confirmed received by a particular time).
   */
  recipient?: Reference[] | undefined;
  /**
   * The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication.
   */
  sender?: Reference | undefined;
  /**
   * The time when this communication was sent.
   */
  sent?: string | undefined;
  _sent?: Element | undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes aborted and entered-in-error that mark the communication as not currently valid.
   */
  status: ('preparation'|'in-progress'|'not-done'|'on-hold'|'stopped'|'completed'|'entered-in-error'|'unknown');
  _status?: Element | undefined;
  /**
   * This is generally only used for "exception" statuses such as "not-done", "suspended" or "aborted". The reason for performing the event at all is captured in reasonCode, not here.
   */
  statusReason?: CodeableConcept | undefined;
  /**
   * The patient or group that was the focus of this communication.
   */
  subject?: Reference | undefined;
  /**
   * Communication.topic.text can be used without any codings.
   */
  topic?: CodeableConcept | undefined;

}