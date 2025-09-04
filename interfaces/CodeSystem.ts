import { CodeSystemConcept } from './CodeSystemConcept';
import { CodeSystemFilter } from './CodeSystemFilter';
import { CodeSystemProperty } from './CodeSystemProperty';
import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { UsageContext } from './UsageContext';

/**
 * The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.
 */
export interface CodeSystem extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'CodeSystem';
  /**
   * If this value is missing, then it is not specified whether a code system is case sensitive or not. When the rule is not known, Postel's law should be followed: produce codes with the correct case, and accept codes in any case. This element is primarily provided to support validation software.
   */
  caseSensitive?: boolean | undefined;
  _caseSensitive?: Element | undefined;
  /**
   * Note that the code system resource does not define what the compositional grammar is, only whether or not there is one.
   */
  compositional?: boolean | undefined;
  _compositional?: Element | undefined;
  /**
   * If this is empty, it means that the code system resource does not represent the content of the code system.
   */
  concept?: CodeSystemConcept[] | undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: ContactDetail[] | undefined;
  /**
   * The extent of the content of the code system (the concepts and codes it defines) are represented in this resource instance.
   */
  content: ('not-present'|'example'|'fragment'|'complete'|'supplement');
  _content?: Element | undefined;
  /**
   * ... Sometimes, the copyright differs between the code system and the codes that are included. The copyright statement should clearly differentiate between these when required.
   */
  copyright?: string | undefined;
  _copyright?: Element | undefined;
  /**
   * The count of concepts defined in this resource cannot be more than this value but may be less for several reasons - see the content element.
   */
  count?: number | undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the code system. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * This description can be used to capture details such as why the code system was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the code system as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the code system is presumed to be the predominant language in the place the code system was created).
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Allows filtering of code systems that are appropriate for use versus not.
   */
  experimental?: boolean | undefined;
  _experimental?: Element | undefined;
  /**
   * Note that filters defined in code systems usually require custom code on the part of any terminology engine that will make them available for use in value set filters. For this reason, they are generally only seen in high value published terminologies.
   */
  filter?: CodeSystemFilter[] | undefined;
  /**
   * Note that other representations might have a different hierarchy or none at all, and represent the information using properties.
   */
  hierarchyMeaning?: ('grouped-by'|'is-a'|'part-of'|'classified-with') | undefined;
  _hierarchyMeaning?: Element | undefined;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this code system outside of FHIR, where it is not possible to use the logical URI.  Note that HL7 defines at least three identifiers for many of its code systems - the FHIR canonical URL, the OID and the V2 Table 0396 mnemonic code.
   */
  identifier?: Identifier[] | undefined;
  /**
   * It may be possible for the code system to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: CodeableConcept[] | undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * A property defines an additional slot through which additional information can be provided about a concept.
   */
  property?: CodeSystemProperty[] | undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the code system is the organization or individual primarily responsible for the maintenance and upkeep of the code system. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the code system. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string | undefined;
  _publisher?: Element | undefined;
  /**
   * This element does not describe the usage of the code system. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this code system.
   */
  purpose?: string | undefined;
  _purpose?: Element | undefined;
  /**
   * Allows filtering of code systems that are appropriate for use versus not.
   */
  status: ('draft'|'active'|'retired'|'unknown');
  _status?: Element | undefined;
  /**
   * The most common use of a code system supplement is to add additional language support.
   */
  supplements?: string | undefined;
  _supplements?: Element | undefined;
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
   * The definition of the value set SHALL include all codes from this code system and only codes from this code system, and it SHALL be immutable.
   */
  valueSet?: string | undefined;
  _valueSet?: Element | undefined;
  /**
   * There may be different code system instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the code system with the format [url]|[version].
   */
  version?: string | undefined;
  _version?: Element | undefined;
  /**
   * Best practice is that code systems do not redefine concepts, or that if concepts are redefined, a new code system definition is created. But this is not always possible, so some code systems may be defined as 'versionNeeded'.
   * Most code systems occasionally refine the displays defined for concepts between versions. Contexts in which the concept display values are validated may require that the version be specified for some code systems irrespective of the value of this property.
   */
  versionNeeded?: boolean | undefined;
  _versionNeeded?: Element | undefined;

}