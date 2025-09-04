import { CodeableConcept } from './CodeableConcept';
import { ContactPoint } from './ContactPoint';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Period } from './Period';
import { PractitionerRoleAvailableTime } from './PractitionerRoleAvailableTime';
import { PractitionerRoleNotAvailable } from './PractitionerRoleNotAvailable';
import { Reference } from './Reference';

/**
 * A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.
 */
export interface PractitionerRole extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'PractitionerRole';
  /**
   * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
   */
  active?: boolean | undefined;
  _active?: Element | undefined;
  /**
   * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
   */
  availabilityExceptions?: string | undefined;
  _availabilityExceptions?: Element | undefined;
  /**
   * More detailed availability information may be provided in associated Schedule/Slot resources.
   */
  availableTime?: PractitionerRoleAvailableTime[] | undefined;
  /**
   * A person may have more than one role.
   */
  code?: CodeableConcept[] | undefined;
  /**
   * Technical endpoints providing access to services operated for the practitioner with this role.
   */
  endpoint?: Reference[] | undefined;
  /**
   * The list of healthcare services that this worker provides for this role's Organization/Location(s).
   */
  healthcareService?: Reference[] | undefined;
  /**
   * Business Identifiers that are specific to a role/location.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The location(s) at which this practitioner provides care.
   */
  location?: Reference[] | undefined;
  /**
   * The practitioner is not available or performing this role during this period of time due to the provided reason.
   */
  notAvailable?: PractitionerRoleNotAvailable[] | undefined;
  /**
   * The organization where the Practitioner performs the roles associated.
   */
  organization?: Reference | undefined;
  /**
   * The period during which the person is authorized to act as a practitioner in these role(s) for the organization.
   */
  period?: Period | undefined;
  /**
   * Practitioner that is able to provide the defined services for the organization.
   */
  practitioner?: Reference | undefined;
  /**
   * Specific specialty of the practitioner.
   */
  specialty?: CodeableConcept[] | undefined;
  /**
   * Contact details that are specific to the role/location/service.
   */
  telecom?: ContactPoint[] | undefined;

}