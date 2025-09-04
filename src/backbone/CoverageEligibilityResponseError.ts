import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CoverageEligibilityResponseError extends BackboneElement implements fhir.CoverageEligibilityResponseError {
  /**
   * An error code,from a specified code system, which details why the eligibility check could not be performed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * Constructor for CoverageEligibilityResponseError
   */
  constructor(source: Partial<CoverageEligibilityResponseError> = {}) {
    super(source);
  }
}
