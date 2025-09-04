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
export class EpisodeOfCareDiagnosis extends BackboneElement implements fhir.EpisodeOfCareDiagnosis {
  /**
   * A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  condition?: Reference;

  /**
   * Ranking of the diagnosis (for each role type).
   */
  @IsOptional()
  @IsNumber()
  rank?: number;

  /**
   * Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  role?: CodeableConcept;

  /**
   * Constructor for EpisodeOfCareDiagnosis
   */
  constructor(source: Partial<EpisodeOfCareDiagnosis> = {}) {
    super(source);
  }
}
