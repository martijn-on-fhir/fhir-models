import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { MedicinalProductAuthorizationJurisdictionalAuthorization } from '../backbone/MedicinalProductAuthorizationJurisdictionalAuthorization';
import { MedicinalProductAuthorizationProcedure } from '../backbone/MedicinalProductAuthorizationProcedure';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductAuthorization extends DomainResource implements fhir.MedicinalProductAuthorization {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'MedicinalProductAuthorization' as const;

  /**
   * The country in which the marketing authorization has been granted.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  country?: CodeableConcept[];

  /**
   * A period of time after authorization before generic product applicatiosn can be submitted.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  dataExclusivityPeriod?: Period;

  /**
   * The date when the first authorization was granted by a Medicines Regulatory Agency.
   */
  @IsOptional()
  @IsString()
  dateOfFirstAuthorization?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _dateOfFirstAuthorization?: Element;

  /**
   * Marketing Authorization Holder.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  holder?: Reference;

  /**
   * Business identifier for the marketing authorization, as assigned by a regulator.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Date of first marketing authorization for a company's new medicinal product in any country in the World.
   */
  @IsOptional()
  @IsString()
  internationalBirthDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _internationalBirthDate?: Element;

  /**
   * Jurisdiction within a country.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /**
   * Authorization in areas within a country.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductAuthorizationJurisdictionalAuthorization)
  jurisdictionalAuthorization?: MedicinalProductAuthorizationJurisdictionalAuthorization[];

  /**
   * The legal framework against which this authorization is granted.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  legalBasis?: CodeableConcept;

  /**
   * The regulatory procedure for granting or amending a marketing authorization.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => MedicinalProductAuthorizationProcedure)
  procedure?: MedicinalProductAuthorizationProcedure;

  /**
   * Medicines Regulatory Agency.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  regulator?: Reference;

  /**
   * The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored.
   */
  @IsOptional()
  @IsString()
  restoreDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _restoreDate?: Element;

  /**
   * The status of the marketing authorization.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  status?: CodeableConcept;

  /**
   * The date at which the given status has become applicable.
   */
  @IsOptional()
  @IsString()
  statusDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _statusDate?: Element;

  /**
   * The medicinal product that is being authorized.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * The beginning of the time period in which the marketing authorization is in the specific status shall be specified A com
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  validityPeriod?: Period;

  /**
   * Constructor for MedicinalProductAuthorization
   */
  constructor(source: Partial<MedicinalProductAuthorization> = {}) {
    super(source);
    this.resourceType = 'MedicinalProductAuthorization';
  }
}
