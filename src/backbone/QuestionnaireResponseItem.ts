import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { QuestionnaireResponseItemAnswer } from './QuestionnaireResponseItemAnswer';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class QuestionnaireResponseItem extends BackboneElement {
  /**
   * The value is nested because we cannot have a repeating structure that has variable type.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionnaireResponseItemAnswer)
  answer?: QuestionnaireResponseItemAnswer[];

  /**
   * The ElementDefinition must be in a [StructureDefinition](structuredefinition.html#), and must have a fragment identifier
   */
  @IsOptional()
  @IsString()
  definition?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _definition?: Element;

  /**
   * Questions or sub-groups nested beneath a question or group.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionnaireResponseItem)
  item?: QuestionnaireResponseItem[];

  /**
   * The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.
   */
  @IsOptional()
  @IsString()
  linkId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _linkId?: Element;

  /**
   * Text that is displayed above the contents of the group or as the text of the question being answered.
   */
  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _text?: Element;

  /**
   * Constructor for QuestionnaireResponseItem
   */
  constructor(source: Partial<QuestionnaireResponseItem> = {}) {
    super(source);
  }
}
