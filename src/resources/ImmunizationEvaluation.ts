import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImmunizationEvaluation extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'ImmunizationEvaluation' as const;

  /**
   * Indicates the authority who published the protocol (e.g. ACIP).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  authority?: Reference;

  /**
   * The date the evaluation of the vaccine administration event was performed.
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * Additional information about the evaluation.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (su
   */
  @IsOptional()
  @IsNumber()
  doseNumberPositiveInt?: number;

  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (su
   */
  @IsOptional()
  @IsString()
  doseNumberString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _doseNumberString?: Element;

  /**
   * Indicates if the dose is valid or not valid with respect to the published recommendations.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  doseStatus?: CodeableConcept;

  /**
   * Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendat
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  doseStatusReason?: CodeableConcept[];

  /**
   * A unique identifier assigned to this immunization evaluation record.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The vaccine administration event being evaluated.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  immunizationEvent?: Reference;

  /**
   * The individual for whom the evaluation is being done.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /**
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  @IsOptional()
  @IsString()
  series?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _series?: Element;

  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (su
   */
  @IsOptional()
  @IsNumber()
  seriesDosesPositiveInt?: number;

  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (su
   */
  @IsOptional()
  @IsString()
  seriesDosesString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _seriesDosesString?: Element;

  /**
   * Indicates the current status of the evaluation of the vaccination administration event.
   */
  @IsOptional()
  @IsIn(['completed', 'entered-in-error'])
  status?: ('completed'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * The vaccine preventable disease the dose is being evaluated against.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  targetDisease?: CodeableConcept;

  /**
   * Constructor for ImmunizationEvaluation
   */
  constructor(source: Partial<ImmunizationEvaluation> = {}) {
    super(source);
    this.resourceType = 'ImmunizationEvaluation';
  }
}
