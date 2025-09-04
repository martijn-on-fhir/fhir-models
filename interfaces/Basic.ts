import { CodeableConcept } from './CodeableConcept';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.
 */
export interface Basic extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Basic';
  /**
   * Indicates who was responsible for creating the resource instance.
   */
  author?: Reference | undefined;
  /**
   * Because resource references will only be able to indicate 'Basic', the type of reference will need to be specified in a Profile identified as part of the resource.  Refer to the resource notes section for information on appropriate terminologies for this code.
   * This element is labeled as a modifier because it defines the meaning of the resource and cannot be ignored.
   */
  code: CodeableConcept;
  /**
   * Identifies when the resource was first created.
   */
  created?: string | undefined;
  _created?: Element | undefined;
  /**
   * Identifier assigned to the resource for business purposes, outside the context of FHIR.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Optional as not all potential resources will have subjects.  Resources associated with multiple subjects can handle this via extension.
   */
  subject?: Reference | undefined;

}