import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Duration } from '../elements/Duration';
import { Quantity } from '../elements/Quantity';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationKnowledgeRegulatoryMaxDispense extends BackboneElement implements fhir.MedicationKnowledgeRegulatoryMaxDispense {
  /**
   * The period that applies to the maximum number of units.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  period?: Duration;

  /**
   * The maximum number of units of the medication that can be dispensed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * Constructor for MedicationKnowledgeRegulatoryMaxDispense
   */
  constructor(source: Partial<MedicationKnowledgeRegulatoryMaxDispense> = {}) {
    super(source);
  }
}
