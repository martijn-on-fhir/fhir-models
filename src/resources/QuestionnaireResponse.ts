import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Identifier } from '../elements/Identifier';
import { QuestionnaireResponseItem } from '../backbone/QuestionnaireResponseItem';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class QuestionnaireResponse extends DomainResource implements fhir.QuestionnaireResponse {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'QuestionnaireResponse' as const;

  /**
   * Mapping a subject's answers to multiple choice options and determining what to put in the textual answer is a matter of 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  author?: Reference;

  /**
   * May be different from the lastUpdateTime of the resource itself, because that reflects when the data was known to the se
   */
  @IsOptional()
  @IsString()
  authored?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _authored?: Element;

  /**
   * The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a Service
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after t
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * A business identifier assigned to a particular completed (or partially completed) questionnaire.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionnaireResponseItem)
  item?: QuestionnaireResponseItem[];

  /**
   * Composition of questionnaire responses will be handled by the parent questionnaire having answers that reference the chi
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /**
   * If a QuestionnaireResponse references a Questionnaire, then the QuestionnaireResponse structure must be consistent with 
   */
  @IsOptional()
  @IsString()
  questionnaire?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _questionnaire?: Element;

  /**
   * If not specified, no inference can be made about who provided the data.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  source?: Reference;

  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  @IsOptional()
  @IsIn(['in-progress', 'completed', 'amended', 'entered-in-error', 'stopped'])
  status?: ('in-progress'|'completed'|'amended'|'entered-in-error'|'stopped');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * If the Questionnaire declared a subjectType, the resource pointed to by this element must be an instance of one of the l
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * Constructor for QuestionnaireResponse
   */
  constructor(source: Partial<QuestionnaireResponse> = {}) {
    super(source);
    this.resourceType = 'QuestionnaireResponse';
  }
}
