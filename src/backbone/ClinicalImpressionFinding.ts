import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ClinicalImpressionFinding extends BackboneElement {
  /**
   * Which investigations support finding or diagnosis.
   */
  @IsOptional()
  @IsString()
  basis?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _basis?: Element;

  /**
   * Specific text or code for finding or diagnosis, which may include ruled-out or resolved conditions.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  itemCodeableConcept?: CodeableConcept;

  /**
   * Specific reference for finding or diagnosis, which may include ruled-out or resolved conditions.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  itemReference?: Reference;

  /**
   * Constructor for ClinicalImpressionFinding
   */
  constructor(source: Partial<ClinicalImpressionFinding> = {}) {
    super(source);
  }
}
