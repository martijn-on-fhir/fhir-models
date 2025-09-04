import { Address } from './Address';
import { CodeableConcept } from './CodeableConcept';
import { ContactPoint } from './ContactPoint';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { OrganizationContact } from './OrganizationContact';
import { Reference } from './Reference';

/**
 * A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
 */
export interface Organization extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Organization';
  /**
   * This active flag is not intended to be used to mark an organization as temporarily closed or under construction. Instead the Location(s) within the Organization should have the suspended status. If further details of the reason for the suspension are required, then an extension on this element should be used.
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  active?: boolean | undefined;
  _active?: Element | undefined;
  /**
   * Organization may have multiple addresses with different uses or applicable periods. The use code 'home' is not to be used.
   */
  address?: Address[] | undefined;
  /**
   * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the organization.
   */
  alias?: string[] | undefined;
  _alias?: Element[] | undefined;
  /**
   * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
   */
  contact?: OrganizationContact[] | undefined;
  /**
   * Technical endpoints providing access to services operated for the organization.
   */
  endpoint?: Reference[] | undefined;
  /**
   * Identifier for the organization that is used to identify the organization across multiple disparate systems.
   */
  identifier?: Identifier[] | undefined;
  /**
   * If the name of an organization changes, consider putting the old name in the alias column so that it can still be located through searches.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * The organization of which this organization forms a part.
   */
  partOf?: Reference | undefined;
  /**
   * The use code 'home' is not to be used. Note that these contacts are not the contact details of people who are employed by or represent the organization, but official contacts for the organization itself.
   */
  telecom?: ContactPoint[] | undefined;
  /**
   * Organizations can be corporations, wards, sections, clinical teams, government departments, etc. Note that code is generally a classifier of the type of organization; in many applications, codes are used to identity a particular organization (say, ward) as opposed to another of the same type - these are identifiers, not codes
   * When considering if multiple types are appropriate, you should evaluate if child organizations would be a more appropriate use of the concept, as different types likely are in different sub-areas of the organization. This is most likely to be used where type values have orthogonal values, such as a religious, academic and medical center.
   * We expect that some jurisdictions will profile this optionality to be a single cardinality.
   */
  type?: CodeableConcept[] | undefined;

}