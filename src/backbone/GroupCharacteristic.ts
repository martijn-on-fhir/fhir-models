import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class GroupCharacteristic extends BackboneElement implements fhir.GroupCharacteristic {
  /**
   * A code that identifies the kind of trait being asserted.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * This is labeled as "Is Modifier" because applications cannot wrongly include excluded members as included or vice versa.
   */
  @IsOptional()
  @IsBoolean()
  exclude?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _exclude?: Element;

  /**
   * The period over which the characteristic is tested; e.g. the patient had an operation during the month of June.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  valueCodeableConcept?: CodeableConcept;

  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueBoolean?: Element;

  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  valueQuantity?: Quantity;

  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  valueRange?: Range;

  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  valueReference?: Reference;

  /**
   * Constructor for GroupCharacteristic
   */
  constructor(source: Partial<GroupCharacteristic> = {}) {
    super(source);
  }
}
