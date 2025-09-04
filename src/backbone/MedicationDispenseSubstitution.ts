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
export class MedicationDispenseSubstitution extends BackboneElement implements fhir.MedicationDispenseSubstitution {
  /**
   * Indicates the reason for the substitution (or lack of substitution) from what was prescribed.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reason?: CodeableConcept[];

  /**
   * The person or organization that has primary responsibility for the substitution.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  responsibleParty?: Reference[];

  /**
   * A code signifying whether a different drug was dispensed from what was prescribed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * True if the dispenser dispensed a different drug or product from what was prescribed.
   */
  @IsOptional()
  @IsBoolean()
  wasSubstituted?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _wasSubstituted?: Element;

  /**
   * Constructor for MedicationDispenseSubstitution
   */
  constructor(source: Partial<MedicationDispenseSubstitution> = {}) {
    super(source);
  }
}
