import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Duration } from '../elements/Duration';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';
import { Ratio } from '../elements/Ratio';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class GoalTarget extends BackboneElement {
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type asso
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  detailQuantity?: Quantity;

  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type asso
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  detailRange?: Range;

  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type asso
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  detailCodeableConcept?: CodeableConcept;

  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type asso
   */
  @IsOptional()
  @IsString()
  detailString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _detailString?: Element;

  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type asso
   */
  @IsOptional()
  @IsBoolean()
  detailBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _detailBoolean?: Element;

  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type asso
   */
  @IsOptional()
  @IsNumber()
  detailInteger?: number;

  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type asso
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  detailRatio?: Ratio;

  /**
   * Indicates either the date or the duration after start by which the goal should be met.
   */
  @IsOptional()
  @IsString()
  dueDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _dueDate?: Element;

  /**
   * Indicates either the date or the duration after start by which the goal should be met.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  dueDuration?: Duration;

  /**
   * The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  measure?: CodeableConcept;

  /**
   * Constructor for GoalTarget
   */
  constructor(source: Partial<GoalTarget> = {}) {
    super(source);
  }
}
