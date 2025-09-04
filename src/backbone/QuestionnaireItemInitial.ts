import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Attachment } from '../elements/Attachment';
import { Coding } from '../elements/Coding';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class QuestionnaireItemInitial extends BackboneElement implements fhir.QuestionnaireItemInitial {
  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueBoolean?: Element;

  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  @IsOptional()
  @IsNumber()
  valueDecimal?: number;

  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  @IsOptional()
  @IsString()
  valueDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueDate?: Element;

  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueDateTime?: Element;

  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  @IsOptional()
  @IsString()
  valueTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueTime?: Element;

  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  @IsOptional()
  @IsString()
  valueString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueString?: Element;

  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  @IsOptional()
  @IsString()
  valueUri?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueUri?: Element;

  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  valueAttachment?: Attachment;

  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  valueCoding?: Coding;

  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /**
   * The type of the initial value must be consistent with the type of the item.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  valueReference?: Reference;

  /**
   * Constructor for QuestionnaireItemInitial
   */
  constructor(source: Partial<QuestionnaireItemInitial> = {}) {
    super(source);
  }
}
