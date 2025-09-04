import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductAuthorizationJurisdictionalAuthorization extends BackboneElement {
  /**
   * Country of authorization.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  country?: CodeableConcept;

  /**
   * The assigned number for the marketing authorization.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Jurisdiction within a country.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept[];

  /**
   * The legal status of supply in a jurisdiction or region.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  legalStatusOfSupply?: CodeableConcept;

  /**
   * The start and expected end date of the authorization.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  validityPeriod?: Period;

  /**
   * Constructor for MedicinalProductAuthorizationJurisdictionalAuthorization
   */
  constructor(source: Partial<MedicinalProductAuthorizationJurisdictionalAuthorization> = {}) {
    super(source);
  }
}
