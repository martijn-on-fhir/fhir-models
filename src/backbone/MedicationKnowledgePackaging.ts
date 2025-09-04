import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationKnowledgePackaging extends BackboneElement implements fhir.MedicationKnowledgePackaging {
  /**
   * The number of product units the package would contain if fully loaded.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * A code that defines the specific type of packaging that the medication can be found in (e.g. blister sleeve, tube, bottl
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for MedicationKnowledgePackaging
   */
  constructor(source: Partial<MedicationKnowledgePackaging> = {}) {
    super(source);
  }
}
