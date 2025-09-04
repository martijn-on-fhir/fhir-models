import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Identifier } from '../elements/Identifier';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductPackagedBatchIdentifier extends BackboneElement implements fhir.MedicinalProductPackagedBatchIdentifier {
  /**
   * A number appearing on the immediate packaging (and not the outer packaging).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  immediatePackaging?: Identifier;

  /**
   * A number appearing on the outer packaging of a specific batch.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  outerPackaging?: Identifier;

  /**
   * Constructor for MedicinalProductPackagedBatchIdentifier
   */
  constructor(source: Partial<MedicinalProductPackagedBatchIdentifier> = {}) {
    super(source);
  }
}
