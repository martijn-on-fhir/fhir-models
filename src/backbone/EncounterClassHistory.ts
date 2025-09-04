import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Coding } from '../elements/Coding';
import { Period } from '../elements/Period';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class EncounterClassHistory extends BackboneElement {
  /**
   * inpatient | outpatient | ambulatory | emergency +.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  class?: Coding;

  /**
   * The time that the episode was in the specified class.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * Constructor for EncounterClassHistory
   */
  constructor(source: Partial<EncounterClassHistory> = {}) {
    super(source);
  }
}
