import { Address } from './Address';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { ContactPoint } from './ContactPoint';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { LocationHoursOfOperation } from './LocationHoursOfOperation';
import { LocationPosition } from './LocationPosition';
import { Reference } from './Reference';

/**
 * Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.
 */
export interface Location extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Location';
  /**
   * Additional addresses should be recorded using another instance of the Location resource, or via the Organization.
   */
  address?: Address | undefined;
  /**
   * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the location.
   */
  alias?: string[] | undefined;
  _alias?: Element[] | undefined;
  /**
   * A description of when the locations opening ours are different to normal, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as detailed in the opening hours Times.
   */
  availabilityExceptions?: string | undefined;
  _availabilityExceptions?: Element | undefined;
  /**
   * Description of the Location, which helps in finding or referencing the place.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Technical endpoints providing access to services operated for the location.
   */
  endpoint?: Reference[] | undefined;
  /**
   * This type of information is commonly found published in directories and on websites informing customers when the facility is available.
   * Specific services within the location may have their own hours which could be shorter (or longer) than the locations hours.
   */
  hoursOfOperation?: LocationHoursOfOperation[] | undefined;
  /**
   * Unique code or number identifying the location to its users.
   */
  identifier?: Identifier[] | undefined;
  /**
   * This can also be used as the part of the organization hierarchy where this location provides services. These services can be defined through the HealthcareService resource.
   */
  managingOrganization?: Reference | undefined;
  /**
   * This is labeled as a modifier because whether or not the location is a class of locations changes how it can be used and understood.
   */
  mode?: ('instance'|'kind') | undefined;
  _mode?: Element | undefined;
  /**
   * If the name of a location changes, consider putting the old name in the alias column so that it can still be located through searches.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * The operational status covers operation values most relevant to beds (but can also apply to rooms/units/chairs/etc. such as an isolation unit/dialysis chair). This typically covers concepts such as contamination, housekeeping, and other activities like maintenance.
   */
  operationalStatus?: Coding | undefined;
  /**
   * Another Location of which this Location is physically a part of.
   */
  partOf?: Reference | undefined;
  /**
   * Physical form of the location, e.g. building, room, vehicle, road.
   */
  physicalType?: CodeableConcept | undefined;
  /**
   * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).
   */
  position?: LocationPosition | undefined;
  /**
   * The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location.
   */
  status?: ('active'|'suspended'|'inactive') | undefined;
  _status?: Element | undefined;
  /**
   * The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.
   */
  telecom?: ContactPoint[] | undefined;
  /**
   * Indicates the type of function performed at the location.
   */
  type?: CodeableConcept[] | undefined;

}