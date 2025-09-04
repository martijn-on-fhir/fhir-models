import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MeasureReportGroupPopulation extends BackboneElement {
  /**
   * The type of the population.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * The number of members of the population.
   */
  @IsOptional()
  @IsNumber()
  count?: number;

  /**
   * This element refers to a List of subject level MeasureReport resources, one for each subject in this population.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subjectResults?: Reference;

  /**
   * Constructor for MeasureReportGroupPopulation
   */
  constructor(source: Partial<MeasureReportGroupPopulation> = {}) {
    super(source);
  }
}
