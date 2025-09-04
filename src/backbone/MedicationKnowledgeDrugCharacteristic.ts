import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationKnowledgeDrugCharacteristic extends BackboneElement implements fhir.MedicationKnowledgeDrugCharacteristic {
  /**
   * A code specifying which characteristic of the medicine is being described (for example, colour, shape, imprint).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string on
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  valueCodeableConcept?: CodeableConcept;

  /**
   * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string on
   */
  @IsOptional()
  @IsString()
  valueString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueString?: Element;

  /**
   * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string on
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /**
   * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string on
   */
  @IsOptional()
  @IsString()
  valueBase64Binary?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueBase64Binary?: Element;

  /**
   * Constructor for MedicationKnowledgeDrugCharacteristic
   */
  constructor(source: Partial<MedicationKnowledgeDrugCharacteristic> = {}) {
    super(source);
  }
}
