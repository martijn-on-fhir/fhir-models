import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MolecularSequenceQualityRoc extends BackboneElement implements fhir.MolecularSequenceQualityRoc {
  /**
   * Calculated fScore if the GQ score threshold was set to "score" field value.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => number)
  fMeasure?: number[];

  /**
   * The number of false negatives if the GQ score threshold was set to "score" field value.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => number)
  numFN?: number[];

  /**
   * The number of false positives if the GQ score threshold was set to "score" field value.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => number)
  numFP?: number[];

  /**
   * The number of true positives if the GQ score threshold was set to "score" field value.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => number)
  numTP?: number[];

  /**
   * Calculated precision if the GQ score threshold was set to "score" field value.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => number)
  precision?: number[];

  /**
   * Invidual data point representing the GQ (genotype quality) score threshold.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => number)
  score?: number[];

  /**
   * Calculated sensitivity if the GQ score threshold was set to "score" field value.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => number)
  sensitivity?: number[];

  /**
   * Constructor for MolecularSequenceQualityRoc
   */
  constructor(source: Partial<MolecularSequenceQualityRoc> = {}) {
    super(source);
  }
}
