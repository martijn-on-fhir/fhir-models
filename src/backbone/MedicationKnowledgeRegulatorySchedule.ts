import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationKnowledgeRegulatorySchedule extends BackboneElement {
  /**
   * Specifies the specific drug schedule.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  schedule?: CodeableConcept;

  /**
   * Constructor for MedicationKnowledgeRegulatorySchedule
   */
  constructor(source: Partial<MedicationKnowledgeRegulatorySchedule> = {}) {
    super(source);
  }
}
