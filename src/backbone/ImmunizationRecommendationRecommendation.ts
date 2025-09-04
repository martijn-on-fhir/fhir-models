import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ImmunizationRecommendationRecommendationDateCriterion } from './ImmunizationRecommendationRecommendationDateCriterion';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImmunizationRecommendationRecommendation extends BackboneElement {
  /**
   * Vaccine(s) which should not be used to fulfill the recommendation.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  contraindicatedVaccineCode?: CodeableConcept[];

  /**
   * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImmunizationRecommendationRecommendationDateCriterion)
  dateCriterion?: ImmunizationRecommendationRecommendationDateCriterion[];

  /**
   * Contains the description about the protocol under which the vaccine was administered.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (su
   */
  @IsOptional()
  @IsNumber()
  doseNumberPositiveInt?: number;

  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (su
   */
  @IsOptional()
  @IsString()
  doseNumberString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _doseNumberString?: Element;

  /**
   * The reason for the assigned forecast status.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  forecastReason?: CodeableConcept[];

  /**
   * Indicates the patient status with respect to the path to immunity for the target disease.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  forecastStatus?: CodeableConcept;

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
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (su
   */
  @IsOptional()
  @IsNumber()
  seriesDosesPositiveInt?: number;

  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (su
   */
  @IsOptional()
  @IsString()
  seriesDosesString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _seriesDosesString?: Element;

  /**
   * Immunization event history and/or evaluation that supports the status and recommendation.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  supportingImmunization?: Reference[];

  /**
   * Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  supportingPatientInformation?: Reference[];

  /**
   * The targeted disease for the recommendation.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  targetDisease?: CodeableConcept;

  /**
   * Vaccine(s) or vaccine group that pertain to the recommendation.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  vaccineCode?: CodeableConcept[];

  /**
   * Constructor for ImmunizationRecommendationRecommendation
   */
  constructor(source: Partial<ImmunizationRecommendationRecommendation> = {}) {
    super(source);
  }
}
