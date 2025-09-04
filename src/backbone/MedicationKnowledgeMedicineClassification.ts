import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationKnowledgeMedicineClassification extends BackboneElement implements fhir.MedicationKnowledgeMedicineClassification {
  /**
   * Specific category assigned to the medication (e.g. anti-infective, anti-hypertensive, antibiotic, etc.).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  classification?: CodeableConcept[];

  /**
   * The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for MedicationKnowledgeMedicineClassification
   */
  constructor(source: Partial<MedicationKnowledgeMedicineClassification> = {}) {
    super(source);
  }
}
