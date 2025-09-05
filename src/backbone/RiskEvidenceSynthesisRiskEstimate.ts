import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { RiskEvidenceSynthesisRiskEstimatePrecisionEstimate } from './RiskEvidenceSynthesisRiskEstimatePrecisionEstimate';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class RiskEvidenceSynthesisRiskEstimate extends BackboneElement {
  /**
   * The sample size for the group that was measured for this risk estimate.
   */
  @IsOptional()
  @IsNumber()
  denominatorCount?: number;

  /**
   * Human-readable summary of risk estimate.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * The number of group members with the outcome of interest.
   */
  @IsOptional()
  @IsNumber()
  numeratorCount?: number;

  /**
   * A description of the precision of the estimate for the effect.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RiskEvidenceSynthesisRiskEstimatePrecisionEstimate)
  precisionEstimate?: RiskEvidenceSynthesisRiskEstimatePrecisionEstimate[];

  /**
   * Examples include proportion and mean.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Specifies the UCUM unit for the outcome.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  unitOfMeasure?: CodeableConcept;

  /**
   * The point estimate of the risk estimate.
   */
  @IsOptional()
  @IsNumber()
  value?: number;

  /**
   * Constructor for RiskEvidenceSynthesisRiskEstimate
   */
  constructor(source: Partial<RiskEvidenceSynthesisRiskEstimate> = {}) {
    super(source);
  }
}
