import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationDispensePerformer extends BackboneElement {
  /**
   * The device, practitioner, etc. who performed the action.  It should be assumed that the actor is the dispenser of the me
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  actor?: Reference;

  /**
   * Distinguishes the type of performer in the dispense.  For example, date enterer, packager, final checker.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  function?: CodeableConcept;

  /**
   * Constructor for MedicationDispensePerformer
   */
  constructor(source: Partial<MedicationDispensePerformer> = {}) {
    super(source);
  }
}
