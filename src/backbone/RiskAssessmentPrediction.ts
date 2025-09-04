import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Range } from '../elements/Range';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class RiskAssessmentPrediction extends BackboneElement {
  /**
   * One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  outcome?: CodeableConcept;

  /**
   * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as pe
   */
  @IsOptional()
  @IsNumber()
  probabilityDecimal?: number;

  /**
   * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as pe
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  probabilityRange?: Range;

  /**
   * Indicates how likely the outcome is (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, or
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  qualitativeRisk?: CodeableConcept;

  /**
   * Additional information explaining the basis for the prediction.
   */
  @IsOptional()
  @IsString()
  rationale?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _rationale?: Element;

  /**
   * Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the populati
   */
  @IsOptional()
  @IsNumber()
  relativeRisk?: number;

  /**
   * If not specified, the risk applies "over the subject's lifespan".
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  whenPeriod?: Period;

  /**
   * If not specified, the risk applies "over the subject's lifespan".
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  whenRange?: Range;

  /**
   * Constructor for RiskAssessmentPrediction
   */
  constructor(source: Partial<RiskAssessmentPrediction> = {}) {
    super(source);
  }
}
