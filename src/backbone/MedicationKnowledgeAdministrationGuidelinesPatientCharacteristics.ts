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
export class MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics extends BackboneElement implements fhir.MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics {
  /**
   * Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  characteristicCodeableConcept?: CodeableConcept;

  /**
   * Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  characteristicQuantity?: Quantity;

  /**
   * The specific characteristic (e.g. height, weight, gender, etc.).
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  value?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _value?: Element[];

  /**
   * Constructor for MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics
   */
  constructor(source: Partial<MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics> = {}) {
    super(source);
  }
}
