import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class EncounterDiagnosis extends BackboneElement {
  /**
   * For systems that need to know which was the primary diagnosis, these will be marked with the standard extension primaryD
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
   * Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  use?: CodeableConcept;

  /**
   * Constructor for EncounterDiagnosis
   */
  constructor(source: Partial<EncounterDiagnosis> = {}) {
    super(source);
  }
}
