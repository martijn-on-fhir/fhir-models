import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Period } from '../elements/Period';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class BiologicallyDerivedProductManipulation extends BackboneElement implements fhir.BiologicallyDerivedProductManipulation {
  /**
   * Description of manipulation.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Time of manipulation.
   */
  @IsOptional()
  @IsString()
  timeDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _timeDateTime?: Element;

  /**
   * Time of manipulation.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  timePeriod?: Period;

  /**
   * Constructor for BiologicallyDerivedProductManipulation
   */
  constructor(source: Partial<BiologicallyDerivedProductManipulation> = {}) {
    super(source);
  }
}
