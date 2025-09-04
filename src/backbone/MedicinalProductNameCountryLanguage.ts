import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductNameCountryLanguage extends BackboneElement {
  /**
   * Country code for where this name applies.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  country?: CodeableConcept;

  /**
   * Jurisdiction code for where this name applies.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept;

  /**
   * Language code for this name.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  language?: CodeableConcept;

  /**
   * Constructor for MedicinalProductNameCountryLanguage
   */
  constructor(source: Partial<MedicinalProductNameCountryLanguage> = {}) {
    super(source);
  }
}
