import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Attachment } from '../elements/Attachment';
import { Coding } from '../elements/Coding';
import { Quantity } from '../elements/Quantity';
import { QuestionnaireResponseItem } from './QuestionnaireResponseItem';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class QuestionnaireResponseItemAnswer extends BackboneElement {
  /**
   * Nested groups and/or questions found within this particular answer.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionnaireResponseItem)
  item?: QuestionnaireResponseItem[];

  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expos
   */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueBoolean?: Element;

  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expos
   */
  @IsOptional()
  @IsNumber()
  valueDecimal?: number;

  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expos
   */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expos
   */
  @IsOptional()
  @IsString()
  valueDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueDate?: Element;

  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expos
   */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueDateTime?: Element;

  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expos
   */
  @IsOptional()
  @IsString()
  valueTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueTime?: Element;

  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expos
   */
  @IsOptional()
  @IsString()
  valueString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueString?: Element;

  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expos
   */
  @IsOptional()
  @IsString()
  valueUri?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueUri?: Element;

  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expos
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  valueAttachment?: Attachment;

  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expos
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  valueCoding?: Coding;

  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expos
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expos
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  valueReference?: Reference;

  /**
   * Constructor for QuestionnaireResponseItemAnswer
   */
  constructor(source: Partial<QuestionnaireResponseItemAnswer> = {}) {
    super(source);
  }
}
