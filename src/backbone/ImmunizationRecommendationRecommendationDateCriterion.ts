import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImmunizationRecommendationRecommendationDateCriterion extends BackboneElement implements fhir.ImmunizationRecommendationRecommendationDateCriterion {
  /**
   * Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * The date whose meaning is specified by dateCriterion.code.
   */
  @IsOptional()
  @IsString()
  value?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _value?: Element;

  /**
   * Constructor for ImmunizationRecommendationRecommendationDateCriterion
   */
  constructor(source: Partial<ImmunizationRecommendationRecommendationDateCriterion> = {}) {
    super(source);
  }
}
