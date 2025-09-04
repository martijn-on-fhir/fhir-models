import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Timing } from './Timing';
import { CodeableConcept } from '../elements/CodeableConcept';
import { TimingRepeat } from '../elements/TimingRepeat';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Timing extends BackboneElement implements fhir.Timing {
  /**
   * BID etc. are defined as 'at institutionally specified times'. For example, an institution may choose that BID is "always
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * Identifies specific times when the event occurs.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  event?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _event?: Element[];

  /**
   * A set of rules that describe when the event is scheduled.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => TimingRepeat)
  repeat?: TimingRepeat;

  /**
   * Constructor for Timing
   */
  constructor(source: Partial<Timing> = {}) {
    super(source);
  }
}
