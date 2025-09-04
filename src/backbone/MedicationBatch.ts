import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationBatch extends BackboneElement implements fhir.MedicationBatch {
  /**
   * When this specific batch of product will expire.
   */
  @IsOptional()
  @IsString()
  expirationDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _expirationDate?: Element;

  /**
   * The assigned lot number of a batch of the specified product.
   */
  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _lotNumber?: Element;

  /**
   * Constructor for MedicationBatch
   */
  constructor(source: Partial<MedicationBatch> = {}) {
    super(source);
  }
}
