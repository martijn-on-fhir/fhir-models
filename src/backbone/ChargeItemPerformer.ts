import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ChargeItemPerformer extends BackboneElement {
  /**
   * The device, practitioner, etc. who performed or participated in the service.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  actor?: Reference;

  /**
   * Describes the type of performance or participation(e.g. primary surgeon, anesthesiologiest, etc.).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  function?: CodeableConcept;

  /**
   * Constructor for ChargeItemPerformer
   */
  constructor(source: Partial<ChargeItemPerformer> = {}) {
    super(source);
  }
}
