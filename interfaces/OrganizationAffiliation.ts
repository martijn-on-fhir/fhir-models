import { CodeableConcept } from './CodeableConcept';
import { ContactPoint } from './ContactPoint';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
 */
export interface OrganizationAffiliation extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'OrganizationAffiliation';
  /**
   * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
   */
  active?: boolean | undefined;
  _active?: Element | undefined;
  /**
   * Definition of the role the participatingOrganization plays in the association.
   */
  code?: CodeableConcept[] | undefined;
  /**
   * Technical endpoints providing access to services operated for this role.
   */
  endpoint?: Reference[] | undefined;
  /**
   * Healthcare services provided through the role.
   */
  healthcareService?: Reference[] | undefined;
  /**
   * Business identifiers that are specific to this role.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The location(s) at which the role occurs.
   */
  location?: Reference[] | undefined;
  /**
   * Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined).
   */
  network?: Reference[] | undefined;
  /**
   * Organization where the role is available (primary organization/has members).
   */
  organization?: Reference | undefined;
  /**
   * The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. providing services or is a member of).
   */
  participatingOrganization?: Reference | undefined;
  /**
   * The period during which the participatingOrganization is affiliated with the primary organization.
   */
  period?: Period | undefined;
  /**
   * Specific specialty of the participatingOrganization in the context of the role.
   */
  specialty?: CodeableConcept[] | undefined;
  /**
   * Contact details at the participatingOrganization relevant to this Affiliation.
   */
  telecom?: ContactPoint[] | undefined;

}