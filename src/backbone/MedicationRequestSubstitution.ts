import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationRequestSubstitution extends BackboneElement {
  /**
   * This element is labeled as a modifier because whether substitution is allow or not, it cannot be ignored.
   */
  @IsOptional()
  @IsBoolean()
  allowedBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _allowedBoolean?: Element;

  /**
   * This element is labeled as a modifier because whether substitution is allow or not, it cannot be ignored.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  allowedCodeableConcept?: CodeableConcept;

  /**
   * Indicates the reason for the substitution, or why substitution must or must not be performed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  reason?: CodeableConcept;

  /**
   * Constructor for MedicationRequestSubstitution
   */
  constructor(source: Partial<MedicationRequestSubstitution> = {}) {
    super(source);
  }
}
