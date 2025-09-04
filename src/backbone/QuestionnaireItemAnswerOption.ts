import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Coding } from '../elements/Coding';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class QuestionnaireItemAnswerOption extends BackboneElement {
  /**
   * Use this instead of initial[v] if answerValueSet is present.
   */
  @IsOptional()
  @IsBoolean()
  initialSelected?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _initialSelected?: Element;

  /**
   * The data type of the value must agree with the item.type.
   */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /**
   * The data type of the value must agree with the item.type.
   */
  @IsOptional()
  @IsString()
  valueDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueDate?: Element;

  /**
   * The data type of the value must agree with the item.type.
   */
  @IsOptional()
  @IsString()
  valueTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueTime?: Element;

  /**
   * The data type of the value must agree with the item.type.
   */
  @IsOptional()
  @IsString()
  valueString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueString?: Element;

  /**
   * The data type of the value must agree with the item.type.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  valueCoding?: Coding;

  /**
   * The data type of the value must agree with the item.type.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  valueReference?: Reference;

  /**
   * Constructor for QuestionnaireItemAnswerOption
   */
  constructor(source: Partial<QuestionnaireItemAnswerOption> = {}) {
    super(source);
  }
}
