import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductPharmaceuticalCharacteristics extends BackboneElement {
  /**
   * A coded characteristic.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * The status of characteristic e.g. assigned or pending.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  status?: CodeableConcept;

  /**
   * Constructor for MedicinalProductPharmaceuticalCharacteristics
   */
  constructor(source: Partial<MedicinalProductPharmaceuticalCharacteristics> = {}) {
    super(source);
  }
}
