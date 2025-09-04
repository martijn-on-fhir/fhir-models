import { CapabilityStatementDocument } from './CapabilityStatementDocument';
import { CapabilityStatementImplementation } from './CapabilityStatementImplementation';
import { CapabilityStatementMessaging } from './CapabilityStatementMessaging';
import { CapabilityStatementRest } from './CapabilityStatementRest';
import { CapabilityStatementSoftware } from './CapabilityStatementSoftware';
import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { UsageContext } from './UsageContext';

/**
 * A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export interface CapabilityStatement extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'CapabilityStatement';
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: ContactDetail[] | undefined;
  /**
   * A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement.
   */
  copyright?: string | undefined;
  _copyright?: Element | undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the capability statement. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date: string;
  _date?: Element | undefined;
  /**
   * This description can be used to capture details such as why the capability statement was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the capability statement as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the capability statement is presumed to be the predominant language in the place the capability statement was created).This does not need to be populated if the description is adequately implied by the software or implementation details.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * A document definition.
   */
  document?: CapabilityStatementDocument[] | undefined;
  /**
   * Allows filtering of capability statements that are appropriate for use versus not.
   */
  experimental?: boolean | undefined;
  _experimental?: Element | undefined;
  /**
   * Servers may implement multiple versions (see [Managing Multiple Versions](versioning.html), and the [$versions](capabilitystatement-operation-versions.html) operation). If they do, and the CapabilityStatement is requested from the server, then this fhirVersion will be either the version requested, or the server's default version.
   */
  fhirVersion: string;
  _fhirVersion?: Element | undefined;
  /**
   * "xml", "json" and "ttl" are allowed, which describe the simple encodings described in the specification (and imply appropriate bundle support). Otherwise, mime types are legal here.
   */
  format: string[];
  _format?: Element[] | undefined;
  /**
   * Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program.
   */
  implementation?: CapabilityStatementImplementation | undefined;
  /**
   * A list of implementation guides that the server does (or should) support in their entirety.
   */
  implementationGuide?: string[] | undefined;
  _implementationGuide?: Element[] | undefined;
  /**
   * the contents of any directly or indirectly imported CapabilityStatements SHALL NOT overlap, i.e. they cannot refer to the same rest/resource, operations/name, searchparam/name, interaction/code, messaging/endpoint, document/mode pair.
   * A capability statement that imports another CapabilityStatement automatically instantiates it too (though this is often not a very useful statement for the kinds of CapabilityStatements that are suitable for importing).
   */
  imports?: string[] | undefined;
  _imports?: Element[] | undefined;
  /**
   * HL7 defines the following Services: [Terminology Service](terminology-service.html).
   * Many [Implementation Guides](http://fhir.org/guides/registry) define additional services.
   */
  instantiates?: string[] | undefined;
  _instantiates?: Element[] | undefined;
  /**
   * It may be possible for the capability statement to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: CodeableConcept[] | undefined;
  /**
   * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
   */
  kind: ('instance'|'capability'|'requirements');
  _kind?: Element | undefined;
  /**
   * Multiple repetitions allow the documentation of multiple endpoints per solution.
   */
  messaging?: CapabilityStatementMessaging[] | undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * At present, the patch mime types application/json-patch+json and application/xml-patch+xml are legal. Generally, if a server supports PATCH, it would be expected to support the patch formats and match the formats it supports, but this is not always possible or necessary.
   */
  patchFormat?: string[] | undefined;
  _patchFormat?: Element[] | undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the capability statement is the organization or individual primarily responsible for the maintenance and upkeep of the capability statement. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the capability statement. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string | undefined;
  _publisher?: Element | undefined;
  /**
   * This element does not describe the usage of the capability statement. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this capability statement.
   */
  purpose?: string | undefined;
  _purpose?: Element | undefined;
  /**
   * Multiple repetitions allow definition of both client and/or server behaviors or possibly behaviors under different configuration settings (for software or requirements statements).
   */
  rest?: CapabilityStatementRest[] | undefined;
  /**
   * Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation.
   */
  software?: CapabilityStatementSoftware | undefined;
  /**
   * Allows filtering of capability statements that are appropriate for use versus not.This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.
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
   * There may be different capability statement instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the capability statement with the format [url]|[version].
   */
  version?: string | undefined;
  _version?: Element | undefined;

}