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
export class MeasureGroupStratifierComponent extends BackboneElement {
  /**
   * Indicates a meaning for the stratifier component. This can be as simple as a unique identifier, or it can establish mean
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * An expression that specifies the criteria for this component of the stratifier. This is typically the name of an express
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Expression)
  criteria?: Expression;

  /**
   * The human readable description of this stratifier criteria component.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Constructor for MeasureGroupStratifierComponent
   */
  constructor(source: Partial<MeasureGroupStratifierComponent> = {}) {
    super(source);
  }
}
