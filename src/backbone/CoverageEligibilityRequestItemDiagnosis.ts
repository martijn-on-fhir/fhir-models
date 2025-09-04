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
export class CoverageEligibilityRequestItemDiagnosis extends BackboneElement implements fhir.CoverageEligibilityRequestItemDiagnosis {
  /**
   * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  diagnosisCodeableConcept?: CodeableConcept;

  /**
   * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  diagnosisReference?: Reference;

  /**
   * Constructor for CoverageEligibilityRequestItemDiagnosis
   */
  constructor(source: Partial<CoverageEligibilityRequestItemDiagnosis> = {}) {
    super(source);
  }
}
