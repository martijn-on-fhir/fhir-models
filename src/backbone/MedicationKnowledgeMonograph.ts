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
export class MedicationKnowledgeMonograph extends BackboneElement implements fhir.MedicationKnowledgeMonograph {
  /**
   * Associated documentation about the medication.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  source?: Reference;

  /**
   * The category of documentation about the medication. (e.g. professional monograph, patient education monograph).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for MedicationKnowledgeMonograph
   */
  constructor(source: Partial<MedicationKnowledgeMonograph> = {}) {
    super(source);
  }
}
