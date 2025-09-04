import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TaskRestriction extends BackboneElement {
  /**
   * Note that period.high is the due date representing the time by which the task should be completed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * For requests that are targeted to more than on potential recipient/target, for whom is fulfillment sought?
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  recipient?: Reference[];

  /**
   * Indicates the number of times the requested action should occur.
   */
  @IsOptional()
  @IsNumber()
  repetitions?: number;

  /**
   * Constructor for TaskRestriction
   */
  constructor(source: Partial<TaskRestriction> = {}) {
    super(source);
  }
}
