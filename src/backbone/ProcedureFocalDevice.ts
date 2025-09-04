import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ProcedureFocalDevice extends BackboneElement {
  /**
   * The kind of change that happened to the device during the procedure.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  action?: CodeableConcept;

  /**
   * The device that was manipulated (changed) during the procedure.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  manipulated?: Reference;

  /**
   * Constructor for ProcedureFocalDevice
   */
  constructor(source: Partial<ProcedureFocalDevice> = {}) {
    super(source);
  }
}
