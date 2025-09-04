import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Period } from '../elements/Period';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class EncounterStatusHistory extends BackboneElement implements fhir.EncounterStatusHistory {
  /**
   * The time that the episode was in the specified status.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * planned | arrived | triaged | in-progress | onleave | finished | cancelled +.
   */
  @IsOptional()
  @IsIn(['planned', 'arrived', 'triaged', 'in-progress', 'onleave', 'finished', 'cancelled', 'entered-in-error', 'unknown'])
  status?: ('planned'|'arrived'|'triaged'|'in-progress'|'onleave'|'finished'|'cancelled'|'entered-in-error'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Constructor for EncounterStatusHistory
   */
  constructor(source: Partial<EncounterStatusHistory> = {}) {
    super(source);
  }
}
