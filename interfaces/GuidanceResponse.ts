import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { DataRequirement } from './DataRequirement';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.
 */
export interface GuidanceResponse extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'GuidanceResponse';
  /**
   * If the evaluation could not be completed due to lack of information, or additional information would potentially result in a more accurate response, this element will a description of the data required in order to proceed with the evaluation. A subsequent request to the service should include this data.
   */
  dataRequirement?: DataRequirement[] | undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official copmletion of an encounter but still be tied to the context of the encounter.
   */
  encounter?: Reference | undefined;
  /**
   * Messages resulting from the evaluation of the artifact or artifacts. As part of evaluating the request, the engine may produce informational or warning messages. These messages will be provided by this element.
   */
  evaluationMessage?: Reference[] | undefined;
  /**
   * Allows a service to provide  unique, business identifiers for the response.
   */
  identifier?: Identifier[] | undefined;
  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  moduleUri?: string | undefined;
  _moduleUri?: Element | undefined;
  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  moduleCanonical?: string | undefined;
  _moduleCanonical?: Element | undefined;
  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  moduleCodeableConcept?: CodeableConcept | undefined;
  /**
   * Provides a mechanism to communicate additional information about the response.
   */
  note?: Annotation[] | undefined;
  /**
   * Indicates when the guidance response was processed.
   */
  occurrenceDateTime?: string | undefined;
  _occurrenceDateTime?: Element | undefined;
  /**
   * The output parameters of the evaluation, if any. Many modules will result in the return of specific resources such as procedure or communication requests that are returned as part of the operation result. However, modules may define specific outputs that would be returned as the result of the evaluation, and these would be returned in this element.
   */
  outputParameters?: Reference | undefined;
  /**
   * Provides a reference to the device that performed the guidance.
   */
  performer?: Reference | undefined;
  /**
   * Describes the reason for the guidance response in coded or textual form.
   */
  reasonCode?: CodeableConcept[] | undefined;
  /**
   * Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
   */
  reasonReference?: Reference[] | undefined;
  /**
   * The identifier of the request associated with this response. If an identifier was given as part of the request, it will be reproduced here to enable the requester to more easily identify the response in a multi-request scenario.
   */
  requestIdentifier?: Identifier | undefined;
  /**
   * The actions, if any, produced by the evaluation of the artifact.
   */
  result?: Reference | undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: ('success'|'data-requested'|'data-required'|'in-progress'|'failure'|'entered-in-error');
  _status?: Element | undefined;
  /**
   * The patient for which the request was processed.
   */
  subject?: Reference | undefined;

}