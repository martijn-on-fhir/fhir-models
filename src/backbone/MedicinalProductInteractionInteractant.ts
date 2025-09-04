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
export class MedicinalProductInteractionInteractant extends BackboneElement implements fhir.MedicinalProductInteractionInteractant {
  /**
   * The specific medication, food or laboratory test that interacts.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  itemReference?: Reference;

  /**
   * The specific medication, food or laboratory test that interacts.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  itemCodeableConcept?: CodeableConcept;

  /**
   * Constructor for MedicinalProductInteractionInteractant
   */
  constructor(source: Partial<MedicinalProductInteractionInteractant> = {}) {
    super(source);
  }
}
