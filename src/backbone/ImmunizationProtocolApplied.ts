import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImmunizationProtocolApplied extends BackboneElement implements fhir.ImmunizationProtocolApplied {
  /**
   * Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  authority?: Reference;

  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (su
   */
  @IsOptional()
  @IsNumber()
  doseNumberPositiveInt?: number;

  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (su
   */
  @IsOptional()
  @IsString()
  doseNumberString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _doseNumberString?: Element;

  /**
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  @IsOptional()
  @IsString()
  series?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _series?: Element;

  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (su
   */
  @IsOptional()
  @IsNumber()
  seriesDosesPositiveInt?: number;

  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (su
   */
  @IsOptional()
  @IsString()
  seriesDosesString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _seriesDosesString?: Element;

  /**
   * The vaccine preventable disease the dose is being administered against.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  targetDisease?: CodeableConcept[];

  /**
   * Constructor for ImmunizationProtocolApplied
   */
  constructor(source: Partial<ImmunizationProtocolApplied> = {}) {
    super(source);
  }
}
