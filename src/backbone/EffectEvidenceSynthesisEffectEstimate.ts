import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { EffectEvidenceSynthesisEffectEstimatePrecisionEstimate } from './EffectEvidenceSynthesisEffectEstimatePrecisionEstimate';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class EffectEvidenceSynthesisEffectEstimate extends BackboneElement implements fhir.EffectEvidenceSynthesisEffectEstimate {
  /**
   * Human-readable summary of effect estimate.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * A description of the precision of the estimate for the effect.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EffectEvidenceSynthesisEffectEstimatePrecisionEstimate)
  precisionEstimate?: EffectEvidenceSynthesisEffectEstimatePrecisionEstimate[];

  /**
   * Examples include relative risk and mean difference.
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
   * The point estimate of the effect estimate.
   */
  @IsOptional()
  @IsNumber()
  value?: number;

  /**
   * Used to define variant exposure states such as low-risk state.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  variantState?: CodeableConcept;

  /**
   * Constructor for EffectEvidenceSynthesisEffectEstimate
   */
  constructor(source: Partial<EffectEvidenceSynthesisEffectEstimate> = {}) {
    super(source);
  }
}
