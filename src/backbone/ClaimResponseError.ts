import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ClaimResponseError extends BackboneElement implements fhir.ClaimResponseError {
  /**
   * An error code, from a specified code system, which details why the claim could not be adjudicated.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * The sequence number of the detail within the line item submitted which contains the error. This value is omitted when th
   */
  @IsOptional()
  @IsNumber()
  detailSequence?: number;

  /**
   * The sequence number of the line item submitted which contains the error. This value is omitted when the error occurs out
   */
  @IsOptional()
  @IsNumber()
  itemSequence?: number;

  /**
   * The sequence number of the sub-detail within the detail within the line item submitted which contains the error. This va
   */
  @IsOptional()
  @IsNumber()
  subDetailSequence?: number;

  /**
   * Constructor for ClaimResponseError
   */
  constructor(source: Partial<ClaimResponseError> = {}) {
    super(source);
  }
}
