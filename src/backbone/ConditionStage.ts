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
export class ConditionStage extends BackboneElement implements fhir.ConditionStage {
  /**
   * Reference to a formal record of the evidence on which the staging assessment is based.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  assessment?: Reference[];

  /**
   * A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  summary?: CodeableConcept;

  /**
   * The kind of staging, such as pathological or clinical staging.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for ConditionStage
   */
  constructor(source: Partial<ConditionStage> = {}) {
    super(source);
  }
}
