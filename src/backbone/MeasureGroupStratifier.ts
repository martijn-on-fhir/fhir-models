import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Expression } from '../elements/Expression';
import { MeasureGroupStratifierComponent } from './MeasureGroupStratifierComponent';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MeasureGroupStratifier extends BackboneElement {
  /**
   * Indicates a meaning for the stratifier. This can be as simple as a unique identifier, or it can establish meaning in a b
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * Stratifiers are defined either as a single criteria, or as a set of component criteria.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureGroupStratifierComponent)
  component?: MeasureGroupStratifierComponent[];

  /**
   * An expression that specifies the criteria for the stratifier. This is typically the name of an expression defined within
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Expression)
  criteria?: Expression;

  /**
   * The human readable description of this stratifier criteria.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Constructor for MeasureGroupStratifier
   */
  constructor(source: Partial<MeasureGroupStratifier> = {}) {
    super(source);
  }
}
