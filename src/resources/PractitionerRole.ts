import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactPoint } from '../elements/ContactPoint';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { PractitionerRoleAvailableTime } from '../backbone/PractitionerRoleAvailableTime';
import { PractitionerRoleNotAvailable } from '../backbone/PractitionerRoleNotAvailable';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class PractitionerRole extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'PractitionerRole' as const;

  /**
   * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specif
   */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _active?: Element;

  /**
   * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exce
   */
  @IsOptional()
  @IsString()
  availabilityExceptions?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _availabilityExceptions?: Element;

  /**
   * More detailed availability information may be provided in associated Schedule/Slot resources.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PractitionerRoleAvailableTime)
  availableTime?: PractitionerRoleAvailableTime[];

  /**
   * A person may have more than one role.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  code?: CodeableConcept[];

  /**
   * Technical endpoints providing access to services operated for the practitioner with this role.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  endpoint?: Reference[];

  /**
   * The list of healthcare services that this worker provides for this role's Organization/Location(s).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  healthcareService?: Reference[];

  /**
   * Business Identifiers that are specific to a role/location.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The location(s) at which this practitioner provides care.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  location?: Reference[];

  /**
   * The practitioner is not available or performing this role during this period of time due to the provided reason.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PractitionerRoleNotAvailable)
  notAvailable?: PractitionerRoleNotAvailable[];

  /**
   * The organization where the Practitioner performs the roles associated.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  organization?: Reference;

  /**
   * The period during which the person is authorized to act as a practitioner in these role(s) for the organization.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * Practitioner that is able to provide the defined services for the organization.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  practitioner?: Reference;

  /**
   * Specific specialty of the practitioner.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  specialty?: CodeableConcept[];

  /**
   * Contact details that are specific to the role/location/service.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /**
   * Constructor for PractitionerRole
   */
  constructor(source: Partial<PractitionerRole> = {}) {
    super(source);
    this.resourceType = 'PractitionerRole';
  }
}
