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
export class ConditionEvidence extends BackboneElement implements fhir.ConditionEvidence {
  /**
   * A manifestation or symptom that led to the recording of this condition.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  code?: CodeableConcept[];

  /**
   * Links to other relevant information, including pathology reports.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  detail?: Reference[];

  /**
   * Constructor for ConditionEvidence
   */
  constructor(source: Partial<ConditionEvidence> = {}) {
    super(source);
  }
}
