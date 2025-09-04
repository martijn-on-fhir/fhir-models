import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductManufacturingBusinessOperation extends BackboneElement implements fhir.MedicinalProductManufacturingBusinessOperation {
  /**
   * Regulatory authorization reference number.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  authorisationReferenceNumber?: Identifier;

  /**
   * To indicate if this proces is commercially confidential.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  confidentialityIndicator?: CodeableConcept;

  /**
   * Regulatory authorization date.
   */
  @IsOptional()
  @IsString()
  effectiveDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _effectiveDate?: Element;

  /**
   * The manufacturer or establishment associated with the process.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  manufacturer?: Reference[];

  /**
   * The type of manufacturing operation.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  operationType?: CodeableConcept;

  /**
   * A regulator which oversees the operation.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  regulator?: Reference;

  /**
   * Constructor for MedicinalProductManufacturingBusinessOperation
   */
  constructor(source: Partial<MedicinalProductManufacturingBusinessOperation> = {}) {
    super(source);
  }
}
