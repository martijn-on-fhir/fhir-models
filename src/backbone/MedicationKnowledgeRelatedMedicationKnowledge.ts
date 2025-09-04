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
export class MedicationKnowledgeRelatedMedicationKnowledge extends BackboneElement implements fhir.MedicationKnowledgeRelatedMedicationKnowledge {
  /**
   * Associated documentation about the associated medication knowledge.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reference?: Reference[];

  /**
   * The category of the associated medication knowledge reference.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for MedicationKnowledgeRelatedMedicationKnowledge
   */
  constructor(source: Partial<MedicationKnowledgeRelatedMedicationKnowledge> = {}) {
    super(source);
  }
}
