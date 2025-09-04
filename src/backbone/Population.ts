import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Range } from '../elements/Range';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Population extends BackboneElement {
  /**
   * The age of the specific population.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  ageRange?: Range;

  /**
   * The age of the specific population.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  ageCodeableConcept?: CodeableConcept;

  /**
   * The gender of the specific population.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  gender?: CodeableConcept;

  /**
   * The existing physiological conditions of the specific population to which this applies.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  physiologicalCondition?: CodeableConcept;

  /**
   * Race of the specific population.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  race?: CodeableConcept;

  /**
   * Constructor for Population
   */
  constructor(source: Partial<Population> = {}) {
    super(source);
  }
}
