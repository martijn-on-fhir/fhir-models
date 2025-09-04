import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactPoint } from '../elements/ContactPoint';
import { HealthcareServiceAvailableTime } from '../backbone/HealthcareServiceAvailableTime';
import { HealthcareServiceEligibility } from '../backbone/HealthcareServiceEligibility';
import { HealthcareServiceNotAvailable } from '../backbone/HealthcareServiceNotAvailable';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class HealthcareService extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'HealthcareService' as const;

  /**
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _active?: Element;

  /**
   * Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be pro
   */
  @IsOptional()
  @IsBoolean()
  appointmentRequired?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _appointmentRequired?: Element;

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
  @Type(() => HealthcareServiceAvailableTime)
  availableTime?: HealthcareServiceAvailableTime[];

  /**
   * Selecting a Service Category then determines the list of relevant service types that can be selected in the primary serv
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /**
   * These could be such things as is wheelchair accessible.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  characteristic?: CodeableConcept[];

  /**
   * Would expect that a user would not see this information on a search results, and it would only be available when viewing
   */
  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _comment?: Element;

  /**
   * When using this property it indicates that the service is available with this language, it is not derived from the pract
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  communication?: CodeableConcept[];

  /**
   * The locations referenced by the coverage area can include both specific locations, including areas, and also conceptual 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  coverageArea?: Reference[];

  /**
   * Does this service have specific eligibility requirements that need to be met in order to use the service?
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HealthcareServiceEligibility)
  eligibility?: HealthcareServiceEligibility[];

  /**
   * Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  endpoint?: Reference[];

  /**
   * Extra details about the service that can't be placed in the other fields.
   */
  @IsOptional()
  @IsString()
  extraDetails?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _extraDetails?: Element;

  /**
   * External identifiers for this item.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The location(s) where this healthcare service may be provided.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  location?: Reference[];

  /**
   * Further description of the service as it would be presented to a consumer while searching.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * The HealthcareService is not available during this period of time due to the provided reason.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HealthcareServiceNotAvailable)
  notAvailable?: HealthcareServiceNotAvailable[];

  /**
   * If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identific
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  photo?: Attachment;

  /**
   * Programs are often defined externally to an Organization, commonly by governments; e.g. Home and Community Care Programs
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  program?: CodeableConcept[];

  /**
   * This property is recommended to be the same as the Location's managingOrganization, and if not provided should be interp
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  providedBy?: Reference;

  /**
   * Constructor for HealthcareService
   */
  constructor(source: Partial<HealthcareService> = {}) {
    super(source);
    this.resourceType = 'HealthcareService';
  }
}
