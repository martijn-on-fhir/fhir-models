import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { TerminologyCapabilitiesClosure } from './TerminologyCapabilitiesClosure';
import { TerminologyCapabilitiesCodeSystem } from './TerminologyCapabilitiesCodeSystem';
import { TerminologyCapabilitiesExpansion } from './TerminologyCapabilitiesExpansion';
import { TerminologyCapabilitiesImplementation } from './TerminologyCapabilitiesImplementation';
import { TerminologyCapabilitiesSoftware } from './TerminologyCapabilitiesSoftware';
import { TerminologyCapabilitiesTranslation } from './TerminologyCapabilitiesTranslation';
import { TerminologyCapabilitiesValidateCode } from './TerminologyCapabilitiesValidateCode';
import { UsageContext } from './UsageContext';

/**
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
export interface TerminologyCapabilities extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'TerminologyCapabilities';
  /**
   * Whether the $closure operation is supported.
   */
  closure?: TerminologyCapabilitiesClosure | undefined;
  /**
   * See notes on the [ValueSet](valueset.html#) resource.
   */
  codeSearch?: ('explicit'|'all') | undefined;
  _codeSearch?: Element | undefined;
  /**
   * The code system - identified by its system URL - may also be declared explicitly as a Code System Resource at /CodeSystem, but it might not be.
   */
  codeSystem?: TerminologyCapabilitiesCodeSystem[] | undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: ContactDetail[] | undefined;
  /**
   * A copyright statement relating to the terminology capabilities and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the terminology capabilities.
   */
  copyright?: string | undefined;
  _copyright?: Element | undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the terminology capabilities. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date: string;
  _date?: Element | undefined;
  /**
   * This description can be used to capture details such as why the terminology capabilities was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the terminology capabilities as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the terminology capabilities is presumed to be the predominant language in the place the terminology capabilities was created).This does not need to be populated if the description is adequately implied by the software or implementation details.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
   */
  expansion?: TerminologyCapabilitiesExpansion | undefined;
  /**
   * Allows filtering of terminology capabilitiess that are appropriate for use versus not.
   */
  experimental?: boolean | undefined;
  _experimental?: Element | undefined;
  /**
   * Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program.
   */
  implementation?: TerminologyCapabilitiesImplementation | undefined;
  /**
   * It may be possible for the terminology capabilities to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: CodeableConcept[] | undefined;
  /**
   * The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase).
   */
  kind: ('instance'|'capability'|'requirements');
  _kind?: Element | undefined;
  /**
   * Whether the server supports lockedDate.
   */
  lockedDate?: boolean | undefined;
  _lockedDate?: Element | undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the terminology capabilities is the organization or individual primarily responsible for the maintenance and upkeep of the terminology capabilities. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the terminology capabilities. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string | undefined;
  _publisher?: Element | undefined;
  /**
   * This element does not describe the usage of the terminology capabilities. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this terminology capabilities.
   */
  purpose?: string | undefined;
  _purpose?: Element | undefined;
  /**
   * Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.
   */
  software?: TerminologyCapabilitiesSoftware | undefined;
  /**
   * Allows filtering of terminology capabilitiess that are appropriate for use versus not.This is not intended for use with actual capability statements, but where capability statements are used to describe possible or desired systems.
   */
  status: ('draft'|'active'|'retired'|'unknown');
  _status?: Element | undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: string | undefined;
  _title?: Element | undefined;
  /**
   * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation.
   */
  translation?: TerminologyCapabilitiesTranslation | undefined;
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
   * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation.
   */
  validateCode?: TerminologyCapabilitiesValidateCode | undefined;
  /**
   * There may be different terminology capabilities instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the terminology capabilities with the format [url]|[version].
   */
  version?: string | undefined;
  _version?: Element | undefined;

}