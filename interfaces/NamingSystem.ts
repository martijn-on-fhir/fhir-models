import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { NamingSystemUniqueId } from './NamingSystemUniqueId';
import { UsageContext } from './UsageContext';

/**
 * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.
 */
export interface NamingSystem extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'NamingSystem';
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: ContactDetail[] | undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the naming system. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date: string;
  _date?: Element | undefined;
  /**
   * This description can be used to capture details such as why the naming system was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the naming system as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the naming system is presumed to be the predominant language in the place the naming system was created).
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * It may be possible for the naming system to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: CodeableConcept[] | undefined;
  /**
   * Indicates the purpose for the naming system - what kinds of things does it make unique?
   */
  kind: ('codesystem'|'identifier'|'root');
  _kind?: Element | undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.The"symbolic name" for an OID would be captured as an extension.
   */
  name: string;
  _name?: Element | undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the naming system is the organization or individual primarily responsible for the maintenance and upkeep of the naming system. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the naming system. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: string | undefined;
  _publisher?: Element | undefined;
  /**
   * This is the primary organization.  Responsibility for some aspects of a namespace may be delegated.
   */
  responsible?: string | undefined;
  _responsible?: Element | undefined;
  /**
   * Allows filtering of naming systems that are appropriate for use versus not.
   */
  status: ('draft'|'active'|'retired'|'unknown');
  _status?: Element | undefined;
  /**
   * This will most commonly be used for identifier namespaces, but categories could potentially be useful for code systems and authorities as well.
   */
  type?: CodeableConcept | undefined;
  /**
   * Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication technologies, etc.
   */
  uniqueId: NamingSystemUniqueId[];
  /**
   * Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc.
   */
  usage?: string | undefined;
  _usage?: Element | undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: UsageContext[] | undefined;

}