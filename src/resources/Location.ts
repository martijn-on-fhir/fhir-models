import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Address } from '../elements/Address';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { ContactPoint } from '../elements/ContactPoint';
import { Identifier } from '../elements/Identifier';
import { LocationHoursOfOperation } from '../backbone/LocationHoursOfOperation';
import { LocationPosition } from '../backbone/LocationPosition';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Location extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Location' as const;

  /**
   * Additional addresses should be recorded using another instance of the Location resource, or via the Organization.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Address)
  address?: Address;

  /**
   * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but 
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  alias?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _alias?: Element[];

  /**
   * A description of when the locations opening ours are different to normal, e.g. public holiday availability. Succinctly d
   */
  @IsOptional()
  @IsString()
  availabilityExceptions?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _availabilityExceptions?: Element;

  /**
   * Description of the Location, which helps in finding or referencing the place.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Technical endpoints providing access to services operated for the location.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  endpoint?: Reference[];

  /**
   * This type of information is commonly found published in directories and on websites informing customers when the facilit
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LocationHoursOfOperation)
  hoursOfOperation?: LocationHoursOfOperation[];

  /**
   * Unique code or number identifying the location to its users.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * This can also be used as the part of the organization hierarchy where this location provides services. These services ca
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  managingOrganization?: Reference;

  /**
   * This is labeled as a modifier because whether or not the location is a class of locations changes how it can be used and
   */
  @IsOptional()
  @IsIn(['instance', 'kind'])
  mode?: ('instance'|'kind');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _mode?: Element;

  /**
   * If the name of a location changes, consider putting the old name in the alias column so that it can still be located thr
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * The operational status covers operation values most relevant to beds (but can also apply to rooms/units/chairs/etc. such
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  operationalStatus?: Coding;

  /**
   * Another Location of which this Location is physically a part of.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  partOf?: Reference;

  /**
   * Physical form of the location, e.g. building, room, vehicle, road.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  physicalType?: CodeableConcept;

  /**
   * The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system u
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => LocationPosition)
  position?: LocationPosition;

  /**
   * The status property covers the general availability of the resource, not the current value which may be covered by the o
   */
  @IsOptional()
  @IsIn(['active', 'suspended', 'inactive'])
  status?: ('active'|'suspended'|'inactive');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mob
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /**
   * Indicates the type of function performed at the location.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /**
   * Constructor for Location
   */
  constructor(source: Partial<Location> = {}) {
    super(source);
    this.resourceType = 'Location';
  }
}
