import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { DeviceRequestParameter } from './DeviceRequestParameter';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';
import { This } from './This';
import { Timing } from './Timing';

/**
 * Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.
 */
export interface DeviceRequest extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'DeviceRequest';
  /**
   * When the request transitioned to being actionable.
   */
  authoredOn?: string | undefined;
  _authoredOn?: Element | undefined;
  /**
   * Plan/proposal/order fulfilled by this request.
   */
  basedOn?: Reference[] | undefined;
  /**
   * The details of the device to be used.
   */
  codeReference?: Reference | undefined;
  /**
   * The details of the device to be used.
   */
  codeCodeableConcept?: CodeableConcept | undefined;
  /**
   * An encounter that provides additional context in which this request is made.
   */
  encounter?: Reference | undefined;
  /**
   * Composite request this is part of.
   */
  groupIdentifier?: Identifier | undefined;
  /**
   * Identifiers assigned to this order by the orderer or by the receiver.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  instantiatesCanonical?: string[] | undefined;
  _instantiatesCanonical?: Element[] | undefined;
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: string[] | undefined;
  _instantiatesUri?: Element[] | undefined;
  /**
   * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.
   */
  insurance?: Reference[] | undefined;
  /**
   * Whether the request is a proposal, plan, an original order or a reflex order.
   */
  intent: ('proposal'|'plan'|'directive'|'order'|'original-order'|'reflex-order'|'filler-order'|'instance-order'|'option');
  _intent?: Element | undefined;
  /**
   * Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
   */
  note?: Annotation[] | undefined;
  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  occurrenceDateTime?: string | undefined;
  _occurrenceDateTime?: Element | undefined;
  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  occurrencePeriod?: Period | undefined;
  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  occurrenceTiming?: Timing | undefined;
  /**
   * Specific parameters for the ordered item.  For example, the prism value for lenses.
   */
  parameter?: DeviceRequestParameter[] | undefined;
  /**
   * The desired performer for doing the diagnostic testing.
   */
  performer?: Reference | undefined;
  /**
   * Desired type of performer for doing the diagnostic testing.
   */
  performerType?: CodeableConcept | undefined;
  /**
   * Indicates how quickly the {{title}} should be addressed with respect to other requests.
   */
  priority?: ('routine'|'urgent'|'asap'|'stat') | undefined;
  _priority?: Element | undefined;
  /**
   * The request takes the place of the referenced completed or terminated request(s).
   */
  priorRequest?: Reference[] | undefined;
  /**
   * Reason or justification for the use of this device.
   */
  reasonCode?: CodeableConcept[] | undefined;
  /**
   * Reason or justification for the use of this device.
   */
  reasonReference?: Reference[] | undefined;
  /**
   * This might not include provenances for all versions of the request - only those deemed "relevant" or important.
   * This SHALL NOT include the Provenance associated with this current version of the resource.  (If that provenance is deemed to be a "relevant" change, it will need to be added as part of a later update.  Until then, it can be queried directly as the Provenance that points to this version using _revinclude
   * All Provenances should have some historical version of this Request as their subject.
   */
  relevantHistory?: Reference[] | undefined;
  /**
   * The individual who initiated the request and has responsibility for its activation.
   */
  requester?: Reference | undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the request as not currently valid.
   */
  status?: ('draft'|'active'|'on-hold'|'revoked'|'completed'|'entered-in-error'|'unknown') | undefined;
  _status?: Element | undefined;
  /**
   * The patient who will use the device.
   */
  subject: Reference;
  /**
   * Additional clinical information about the patient that may influence the request fulfilment.  For example, this may include where on the subject's body the device will be used (i.e. the target site).
   */
  supportingInfo?: Reference[] | undefined;

}