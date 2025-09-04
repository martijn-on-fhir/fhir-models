import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationKnowledgeRegulatorySubstitution extends BackboneElement {
  /**
   * Specifies if regulation allows for changes in the medication when dispensing.
   */
  @IsOptional()
  @IsBoolean()
  allowed?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _allowed?: Element;

  /**
   * Specifies the type of substitution allowed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for MedicationKnowledgeRegulatorySubstitution
   */
  constructor(source: Partial<MedicationKnowledgeRegulatorySubstitution> = {}) {
    super(source);
  }
}
