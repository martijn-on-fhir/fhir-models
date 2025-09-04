import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Reference } from './Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiti
 */
export class UsageContext extends Element implements fhir.UsageContext {
  /**
   * A code that identifies the type of context being specified by this usage context.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  code: Coding;

  /**
   * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  valueCodeableConcept?: CodeableConcept;

  /**
   * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /**
   * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  valueRange?: Range;

  /**
   * A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  valueReference?: Reference;

  /**
   * Constructor for UsageContext
   */
  constructor(source: Partial<UsageContext> = {}) {
    super(source);
  }
}
