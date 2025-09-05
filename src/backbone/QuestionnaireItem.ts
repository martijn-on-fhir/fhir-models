import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Coding } from '../elements/Coding';
import { QuestionnaireItemAnswerOption } from './QuestionnaireItemAnswerOption';
import { QuestionnaireItemEnableWhen } from './QuestionnaireItemEnableWhen';
import { QuestionnaireItemInitial } from './QuestionnaireItemInitial';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class QuestionnaireItem extends BackboneElement {
  /**
   * This element can be used when the value set machinery of answerValueSet is deemed too cumbersome or when there's a need 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionnaireItemAnswerOption)
  answerOption?: QuestionnaireItemAnswerOption[];

  /**
   * LOINC defines many useful value sets for questionnaire responses. See [LOINC Answer Lists](loinc.html#alist). The value 
   */
  @IsOptional()
  @IsString()
  answerValueSet?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _answerValueSet?: Element;

  /**
   * The value may come from the ElementDefinition referred to by .definition.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  code?: Coding[];

  /**
   * The uri refers to an ElementDefinition in a [StructureDefinition](structuredefinition.html#) and always starts with the 
   */
  @IsOptional()
  @IsString()
  definition?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _definition?: Element;

  /**
   * This element must be specified if more than one enableWhen value is provided.
   */
  @IsOptional()
  @IsIn(['all', 'any'])
  enableBehavior?: ('all'|'any');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _enableBehavior?: Element;

  /**
   * If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the re
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionnaireItemEnableWhen)
  enableWhen?: QuestionnaireItemEnableWhen[];

  /**
   * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't chang
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionnaireItemInitial)
  initial?: QuestionnaireItemInitial[];

  /**
   * There is no specified limit to the depth of nesting.  However, Questionnaire authors are encouraged to consider the impa
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionnaireItem)
  item?: QuestionnaireItem[];

  /**
   * This ''can'' be a meaningful identifier (e.g. a LOINC code) but is not intended to have any meaning.  GUIDs or sequentia
   */
  @IsOptional()
  @IsString()
  linkId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _linkId?: Element;

  /**
   * For base64binary, reflects the number of characters representing the encoded data, not the number of bytes of the binary
   */
  @IsOptional()
  @IsNumber()
  maxLength?: number;

  /**
   * These are generally unique within a questionnaire, though this is not guaranteed. Some questionnaires may have multiple 
   */
  @IsOptional()
  @IsString()
  prefix?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _prefix?: Element;

  /**
   * The value of readOnly elements can be established by asserting  extensions for defaultValues, linkages that support pre-
   */
  @IsOptional()
  @IsBoolean()
  readOnly?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _readOnly?: Element;

  /**
   * If a question is marked as repeats=true, then multiple answers can be provided for the question in the corresponding Que
   */
  @IsOptional()
  @IsBoolean()
  repeats?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _repeats?: Element;

  /**
   * Questionnaire.item.required only has meaning for elements that are conditionally enabled with enableWhen if the conditio
   */
  @IsOptional()
  @IsBoolean()
  required?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _required?: Element;

  /**
   * When using this element to represent the name of a section, use group type item and also make sure to limit the text ele
   */
  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _text?: Element;

  /**
   * Additional constraints on the type of answer can be conveyed by extensions. The value may come from the ElementDefinitio
   */
  @IsOptional()
  @IsString()
  type?: ('group'|'display'|'question'|'boolean'|'decimal'|'integer'|'date'|'dateTime'|'time'|'string'|'text'|'url'|'choice'|'open-choice'|'attachment'|'reference'|'quantity');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for QuestionnaireItem
   */
  constructor(source: Partial<QuestionnaireItem> = {}) {
    super(source);
  }
}
