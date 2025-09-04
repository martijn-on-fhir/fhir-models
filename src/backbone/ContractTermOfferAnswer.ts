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
export class ContractTermOfferAnswer extends BackboneElement implements fhir.ContractTermOfferAnswer {
  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of pa
   */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueBoolean?: Element;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of pa
   */
  @IsOptional()
  @IsNumber()
  valueDecimal?: number;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of pa
   */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of pa
   */
  @IsOptional()
  @IsString()
  valueDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueDate?: Element;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of pa
   */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueDateTime?: Element;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of pa
   */
  @IsOptional()
  @IsString()
  valueTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueTime?: Element;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of pa
   */
  @IsOptional()
  @IsString()
  valueString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueString?: Element;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of pa
   */
  @IsOptional()
  @IsString()
  valueUri?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueUri?: Element;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of pa
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  valueAttachment?: Attachment;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of pa
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  valueCoding?: Coding;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of pa
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /**
   * Response to an offer clause or question text,  which enables selection of values to be agreed to, e.g., the period of pa
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  valueReference?: Reference;

  /**
   * Constructor for ContractTermOfferAnswer
   */
  constructor(source: Partial<ContractTermOfferAnswer> = {}) {
    super(source);
  }
}
