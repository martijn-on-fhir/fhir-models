import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Dosage } from './Dosage';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MedicationKnowledgeAdministrationGuidelinesDosage } from './MedicationKnowledgeAdministrationGuidelinesDosage';
import { MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics } from './MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationKnowledgeAdministrationGuidelines extends BackboneElement {
  /**
   * Dosage for the medication for the specific guidelines.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeAdministrationGuidelinesDosage)
  dosage?: MedicationKnowledgeAdministrationGuidelinesDosage[];

  /**
   * Indication for use that apply to the specific administration guidelines.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  indicationCodeableConcept?: CodeableConcept;

  /**
   * Indication for use that apply to the specific administration guidelines.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  indicationReference?: Reference;

  /**
   * Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics)
  patientCharacteristics?: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics[];

  /**
   * Constructor for MedicationKnowledgeAdministrationGuidelines
   */
  constructor(source: Partial<MedicationKnowledgeAdministrationGuidelines> = {}) {
    super(source);
  }
}
