import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Dosage } from './Dosage';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationKnowledgeAdministrationGuidelinesDosage extends BackboneElement {
  /**
   * Dosage for the medication for the specific guidelines.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Dosage)
  dosage?: Dosage[];

  /**
   * The type of dosage (for example, prophylaxis, maintenance, therapeutic, etc.).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for MedicationKnowledgeAdministrationGuidelinesDosage
   */
  constructor(source: Partial<MedicationKnowledgeAdministrationGuidelinesDosage> = {}) {
    super(source);
  }
}
