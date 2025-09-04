import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';
import { RequestGroupAction } from './RequestGroupAction';

/**
 * A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".
 */
export interface RequestGroup extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'RequestGroup';
  /**
   * The actions, if any, produced by the evaluation of the artifact.
   */
  action?: RequestGroupAction[] | undefined;
  /**
   * Provides a reference to the author of the request group.
   */
  author?: Reference | undefined;
  /**
   * Indicates when the request group was created.
   */
  authoredOn?: string | undefined;
  _authoredOn?: Element | undefined;
  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this request.
   */
  basedOn?: Reference[] | undefined;
  /**
   * This element can be used to provide a code that captures the meaning of the request group as a whole, as opposed to the code of the action element, which captures the meaning of the individual actions within the request group.
   */
  code?: CodeableConcept | undefined;
  /**
   * Describes the context of the request group, if any.
   */
  encounter?: Reference | undefined;
  /**
   * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition.  Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
   */
  groupIdentifier?: Identifier | undefined;
  /**
   * Allows a service to provide a unique, business identifier for the request.
   */
  identifier?: Identifier[] | undefined;
  /**
   * A canonical URL referencing a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
   */
  instantiatesCanonical?: string[] | undefined;
  _instantiatesCanonical?: Element[] | undefined;
  /**
   * A URL referencing an externally defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
   */
  instantiatesUri?: string[] | undefined;
  _instantiatesUri?: Element[] | undefined;
  /**
   * Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain.
   */
  intent: ('proposal'|'plan'|'directive'|'order'|'original-order'|'reflex-order'|'filler-order'|'instance-order'|'option');
  _intent?: Element | undefined;
  /**
   * Provides a mechanism to communicate additional information about the response.
   */
  note?: Annotation[] | undefined;
  /**
   * Indicates how quickly the request should be addressed with respect to other requests.
   */
  priority?: ('routine'|'urgent'|'asap'|'stat') | undefined;
  _priority?: Element | undefined;
  /**
   * Describes the reason for the request group in coded or textual form.
   */
  reasonCode?: CodeableConcept[] | undefined;
  /**
   * Indicates another resource whose existence justifies this request group.
   */
  reasonReference?: Reference[] | undefined;
  /**
   * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
   */
  replaces?: Reference[] | undefined;
  /**
   * The current state of the request. For request groups, the status reflects the status of all the requests in the group.
   */
  status: ('draft'|'active'|'on-hold'|'revoked'|'completed'|'entered-in-error'|'unknown');
  _status?: Element | undefined;
  /**
   * The subject for which the request group was created.
   */
  subject?: Reference | undefined;

}