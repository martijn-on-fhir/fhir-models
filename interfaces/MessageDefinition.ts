import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { ContactDetail } from './ContactDetail';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { MessageDefinitionAllowedResponse } from './MessageDefinitionAllowedResponse';
import { MessageDefinitionFocus } from './MessageDefinitionFocus';
import { UsageContext } from './UsageContext';

/**
 * Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.
 */
export interface MessageDefinition extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'MessageDefinition';
  /**
   * This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
   */
  allowedResponse?: MessageDefinitionAllowedResponse[] | undefined;
  /**
   * The MessageDefinition that is the basis for the contents of this resource.
   */
  base?: string | undefined;
  _base?: Element | undefined;
  /**
   * The impact of the content of the message.
   */
  category?: ('consequence'|'currency'|'notification') | undefined;
  _category?: Element | undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: ContactDetail[] | undefined;
  /**
   * A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the message definition.
   */
  copyright?: string | undefined;
  _copyright?: Element | undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the message definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date: string;
  _date?: Element | undefined;
  /**
   * This description can be used to capture details such as why the message definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the message definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the message definition is presumed to be the predominant language in the place the message definition was created).
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Event code or link to the EventDefinition.
   */
  eventCoding?: Coding | undefined;
  /**
   * Event code or link to the EventDefinition.
   */
  eventUri?: string | undefined;
  _eventUri?: Element | undefined;
  /**
   * Allows filtering of message definitions that are appropriate for use versus not.
   */
  experimental?: boolean | undefined;
  _experimental?: Element | undefined;
  /**
   * Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge.
   */
  focus?: MessageDefinitionFocus[] | undefined;
  /**
   * Canonical reference to a GraphDefinition. If a URL is provided, it is the canonical reference to a [GraphDefinition](graphdefinition.html) that it controls what resources are to be added to the bundle when building the document. The GraphDefinition can also specify profiles that apply to the various resources.
   */
  graph?: string[] | undefined;
  _graph?: Element[] | undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this message definition outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: Identifier[] | undefined;
  /**
   * It may be possible for the message definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: CodeableConcept[] | undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * It should be possible to use MessageDefinition to describe a message to be used by certain steps in a particular protocol as part of a PlanDefinition or ActivityDefinition.
   */
  parent?: string[] | undefined;
  _parent?: Element[] | undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the message definition is the organization or individual primarily responsible for the maintenance and upkeep of the message definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the message definition. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string | undefined;
  _publisher?: Element | undefined;
  /**
   * This element does not describe the usage of the message definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this message definition.
   */
  purpose?: string | undefined;
  _purpose?: Element | undefined;
  /**
   * A MessageDefinition that is superseded by this definition.
   */
  replaces?: string[] | undefined;
  _replaces?: Element[] | undefined;
  /**
   * This enables the capability currently available through MSH-16 (Application Level acknowledgement) in HL7 Version 2 to declare at a message instance level whether a response is required or only upon error or success, or never.
   */
  responseRequired?: ('always'|'on-error'|'never'|'on-success') | undefined;
  _responseRequired?: Element | undefined;
  /**
   * Allows filtering of message definitions that are appropriate for use versus not.
   */
  status: ('draft'|'active'|'retired'|'unknown');
  _status?: Element | undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string | undefined;
  _title?: Element | undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions).
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url?: string | undefined;
  _url?: Element | undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: UsageContext[] | undefined;
  /**
   * There may be different message definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the message definition with the format [url]|[version].
   */
  version?: string | undefined;
  _version?: Element | undefined;

}