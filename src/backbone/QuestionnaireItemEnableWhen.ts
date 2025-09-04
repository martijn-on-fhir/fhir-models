import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Coding } from '../elements/Coding';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class QuestionnaireItemEnableWhen extends BackboneElement implements fhir.QuestionnaireItemEnableWhen {
  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  @IsOptional()
  @IsBoolean()
  answerBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _answerBoolean?: Element;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  @IsOptional()
  @IsNumber()
  answerDecimal?: number;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  @IsOptional()
  @IsNumber()
  answerInteger?: number;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  @IsOptional()
  @IsString()
  answerDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _answerDate?: Element;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  @IsOptional()
  @IsString()
  answerDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _answerDateTime?: Element;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  @IsOptional()
  @IsString()
  answerTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _answerTime?: Element;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  @IsOptional()
  @IsString()
  answerString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _answerString?: Element;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  answerCoding?: Coding;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  answerQuantity?: Quantity;

  /**
   * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  answerReference?: Reference;

  /**
   * Specifies the criteria by which the question is enabled.
   */
  @IsOptional()
  @IsIn(['exists', '=', '!=', '>', '<', '>=', '<='])
  operator: ('exists'|'='|'!='|'>'|'<'|'>='|'<=');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _operator?: Element;

  /**
   * If multiple question occurrences are present for the same question (same linkId), then this refers to the nearest questi
   */
  @IsOptional()
  @IsString()
  question?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _question?: Element;

  /**
   * Constructor for QuestionnaireItemEnableWhen
   */
  constructor(source: Partial<QuestionnaireItemEnableWhen> = {}) {
    super(source);
  }
}
