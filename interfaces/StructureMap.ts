import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { StructureMapGroup } from './StructureMapGroup';
import { StructureMapStructure } from './StructureMapStructure';
import { UsageContext } from './UsageContext';

/**
 * A Map of relationships between 2 structures that can be used to transform data.
 */
export interface StructureMap extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'StructureMap';
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: ContactDetail[] | undefined;
  /**
   * A copyright statement relating to the structure map and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure map.
   */
  copyright?: string | undefined;
  _copyright?: Element | undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the structure map. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: string | undefined;
  _date?: Element | undefined;
  /**
   * This description can be used to capture details such as why the structure map was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the structure map as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the structure map is presumed to be the predominant language in the place the structure map was created).
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Allows filtering of structure maps that are appropriate for use versus not.
   */
  experimental?: boolean | undefined;
  _experimental?: Element | undefined;
  /**
   * Organizes the mapping into manageable chunks for human review/ease of maintenance.
   */
  group: StructureMapGroup[];
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this structure map outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Other maps used by this map (canonical URLs).
   */
  import?: string[] | undefined;
  _import?: Element[] | undefined;
  /**
   * It may be possible for the structure map to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: CodeableConcept[] | undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name: string;
  _name?: Element | undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the structure map is the organization or individual primarily responsible for the maintenance and upkeep of the structure map. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the structure map. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string | undefined;
  _publisher?: Element | undefined;
  /**
   * This element does not describe the usage of the structure map. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this structure map.
   */
  purpose?: string | undefined;
  _purpose?: Element | undefined;
  /**
   * Allows filtering of structure maps that are appropriate for use versus not.
   */
  status: ('draft'|'active'|'retired'|'unknown');
  _status?: Element | undefined;
  /**
   * It is not necessary for a structure map to identify any dependent structures, though not listing them may restrict its usefulness.
   */
  structure?: StructureMapStructure[] | undefined;
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
  url: string;
  _url?: Element | undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: UsageContext[] | undefined;
  /**
   * There may be different structure map instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the structure map with the format [url]|[version].
   */
  version?: string | undefined;
  _version?: Element | undefined;

}