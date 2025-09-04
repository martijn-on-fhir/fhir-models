import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MolecularSequenceStructureVariantInner extends BackboneElement implements fhir.MolecularSequenceStructureVariantInner {
  /**
   * Structural variant inner end. If the coordinate system is 0-based then end is exclusive and does not include the last po
   */
  @IsOptional()
  @IsNumber()
  end?: number;

  /**
   * Structural variant inner start. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
   */
  @IsOptional()
  @IsNumber()
  start?: number;

  /**
   * Constructor for MolecularSequenceStructureVariantInner
   */
  constructor(source: Partial<MolecularSequenceStructureVariantInner> = {}) {
    super(source);
  }
}
