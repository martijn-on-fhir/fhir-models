import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Expression } from '../elements/Expression';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MeasureGroupPopulation extends BackboneElement {
  /**
   * The type of population criteria.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * In the case of a continuous-variable or ratio measure, this may be the name of a function that calculates the value of t
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Expression)
  criteria?: Expression;

  /**
   * The human readable description of this population criteria.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Constructor for MeasureGroupPopulation
   */
  constructor(source: Partial<MeasureGroupPopulation> = {}) {
    super(source);
  }
}
