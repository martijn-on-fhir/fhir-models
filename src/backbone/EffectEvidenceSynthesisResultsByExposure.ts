import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class EffectEvidenceSynthesisResultsByExposure extends BackboneElement implements fhir.EffectEvidenceSynthesisResultsByExposure {
  /**
   * Human-readable summary of results by exposure state.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Whether these results are for the exposure state or alternative exposure state.
   */
  @IsOptional()
  @IsIn(['exposure', 'exposure-alternative'])
  exposureState?: ('exposure'|'exposure-alternative');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _exposureState?: Element;

  /**
   * Reference to a RiskEvidenceSynthesis resource.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  riskEvidenceSynthesis?: Reference;

  /**
   * Used to define variant exposure states such as low-risk state.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  variantState?: CodeableConcept;

  /**
   * Constructor for EffectEvidenceSynthesisResultsByExposure
   */
  constructor(source: Partial<EffectEvidenceSynthesisResultsByExposure> = {}) {
    super(source);
  }
}
