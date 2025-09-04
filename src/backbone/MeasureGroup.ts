import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MeasureGroupPopulation } from './MeasureGroupPopulation';
import { MeasureGroupStratifier } from './MeasureGroupStratifier';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MeasureGroup extends BackboneElement {
  /**
   * Indicates a meaning for the group. This can be as simple as a unique identifier, or it can establish meaning in a broade
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * The human readable description of this population group.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * A population criteria for the measure.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureGroupPopulation)
  population?: MeasureGroupPopulation[];

  /**
   * The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureGroupStratifier)
  stratifier?: MeasureGroupStratifier[];

  /**
   * Constructor for MeasureGroup
   */
  constructor(source: Partial<MeasureGroup> = {}) {
    super(source);
  }
}
