import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class RiskEvidenceSynthesisSampleSize extends BackboneElement implements fhir.RiskEvidenceSynthesisSampleSize {
  /**
   * Human-readable summary of sample size.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Number of participants included in this evidence synthesis.
   */
  @IsOptional()
  @IsNumber()
  numberOfParticipants?: number;

  /**
   * Number of studies included in this evidence synthesis.
   */
  @IsOptional()
  @IsNumber()
  numberOfStudies?: number;

  /**
   * Constructor for RiskEvidenceSynthesisSampleSize
   */
  constructor(source: Partial<RiskEvidenceSynthesisSampleSize> = {}) {
    super(source);
  }
}
