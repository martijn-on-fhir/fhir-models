import { Attachment } from './Attachment';
import { CodeableConcept } from './CodeableConcept';
import { ContactPoint } from './ContactPoint';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { HealthcareServiceAvailableTime } from './HealthcareServiceAvailableTime';
import { HealthcareServiceEligibility } from './HealthcareServiceEligibility';
import { HealthcareServiceNotAvailable } from './HealthcareServiceNotAvailable';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * The details of a healthcare service available at a location.
 */
export interface HealthcareService extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'HealthcareService';
  /**
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  active?: boolean | undefined;
  _active?: Element | undefined;
  /**
   * Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
   */
  appointmentRequired?: boolean | undefined;
  _appointmentRequired?: Element | undefined;
  /**
   * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
   */
  availabilityExceptions?: string | undefined;
  _availabilityExceptions?: Element | undefined;
  /**
   * More detailed availability information may be provided in associated Schedule/Slot resources.
   */
  availableTime?: HealthcareServiceAvailableTime[] | undefined;
  /**
   * Selecting a Service Category then determines the list of relevant service types that can be selected in the primary service type.
   */
  category?: CodeableConcept[] | undefined;
  /**
   * These could be such things as is wheelchair accessible.
   */
  characteristic?: CodeableConcept[] | undefined;
  /**
   * Would expect that a user would not see this information on a search results, and it would only be available when viewing the complete details of the service.
   */
  comment?: string | undefined;
  _comment?: Element | undefined;
  /**
   * When using this property it indicates that the service is available with this language, it is not derived from the practitioners, and not all are required to use this language, just that this language is available while scheduling.
   */
  communication?: CodeableConcept[] | undefined;
  /**
   * The locations referenced by the coverage area can include both specific locations, including areas, and also conceptual domains too (mode = kind), such as a physical area (tri-state area) and some other attribute (covered by Example Care Organization). These types of Locations are often not managed by any specific organization. This could also include generic locations such as "in-home".
   */
  coverageArea?: Reference[] | undefined;
  /**
   * Does this service have specific eligibility requirements that need to be met in order to use the service?
   */
  eligibility?: HealthcareServiceEligibility[] | undefined;
  /**
   * Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.
   */
  endpoint?: Reference[] | undefined;
  /**
   * Extra details about the service that can't be placed in the other fields.
   */
  extraDetails?: string | undefined;
  _extraDetails?: Element | undefined;
  /**
   * External identifiers for this item.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The location(s) where this healthcare service may be provided.
   */
  location?: Reference[] | undefined;
  /**
   * Further description of the service as it would be presented to a consumer while searching.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * The HealthcareService is not available during this period of time due to the provided reason.
   */
  notAvailable?: HealthcareServiceNotAvailable[] | undefined;
  /**
   * If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
   */
  photo?: Attachment | undefined;
  /**
   * Programs are often defined externally to an Organization, commonly by governments; e.g. Home and Community Care Programs, Homeless Program, ….
   */
  program?: CodeableConcept[] | undefined;
  /**
   * This property is recommended to be the same as the Location's managingOrganization, and if not provided should be interpreted as such. If the Location does not have a managing Organization, then this property should be populated.
   */
  providedBy?: Reference | undefined;
  /**
   * Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
   */
  referralMethod?: CodeableConcept[] | undefined;
  /**
   * The provision means being commissioned by, contractually obliged or financially sourced. Types of costings that may apply to this healthcare service, such if the service may be available for free, some discounts available, or fees apply.
   */
  serviceProvisionCode?: CodeableConcept[] | undefined;
  /**
   * Collection of specialties handled by the service site. This is more of a medical term.
   */
  specialty?: CodeableConcept[] | undefined;
  /**
   * If this is empty, then refer to the location's contacts.
   */
  telecom?: ContactPoint[] | undefined;
  /**
   * The specific type of service that may be delivered or performed.
   */
  type?: CodeableConcept[] | undefined;

}