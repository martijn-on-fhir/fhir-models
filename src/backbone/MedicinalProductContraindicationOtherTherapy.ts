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
export class MedicinalProductContraindicationOtherTherapy extends BackboneElement implements fhir.MedicinalProductContraindicationOtherTherapy {
  /**
   * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication o
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  medicationCodeableConcept?: CodeableConcept;

  /**
   * Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication o
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  medicationReference?: Reference;

  /**
   * The type of relationship between the medicinal product indication or contraindication and another therapy.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  therapyRelationshipType?: CodeableConcept;

  /**
   * Constructor for MedicinalProductContraindicationOtherTherapy
   */
  constructor(source: Partial<MedicinalProductContraindicationOtherTherapy> = {}) {
    super(source);
  }
}
