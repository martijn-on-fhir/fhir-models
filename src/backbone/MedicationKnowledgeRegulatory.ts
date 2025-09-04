import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { MedicationKnowledgeRegulatoryMaxDispense } from './MedicationKnowledgeRegulatoryMaxDispense';
import { MedicationKnowledgeRegulatorySchedule } from './MedicationKnowledgeRegulatorySchedule';
import { MedicationKnowledgeRegulatorySubstitution } from './MedicationKnowledgeRegulatorySubstitution';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationKnowledgeRegulatory extends BackboneElement {
  /**
   * The maximum number of units of the medication that can be dispensed in a period.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => MedicationKnowledgeRegulatoryMaxDispense)
  maxDispense?: MedicationKnowledgeRegulatoryMaxDispense;

  /**
   * The authority that is specifying the regulations.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  regulatoryAuthority?: Reference;

  /**
   * Specifies the schedule of a medication in jurisdiction.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeRegulatorySchedule)
  schedule?: MedicationKnowledgeRegulatorySchedule[];

  /**
   * Specifies if changes are allowed when dispensing a medication from a regulatory perspective.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationKnowledgeRegulatorySubstitution)
  substitution?: MedicationKnowledgeRegulatorySubstitution[];

  /**
   * Constructor for MedicationKnowledgeRegulatory
   */
  constructor(source: Partial<MedicationKnowledgeRegulatory> = {}) {
    super(source);
  }
}
