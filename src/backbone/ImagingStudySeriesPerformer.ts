import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImagingStudySeriesPerformer extends BackboneElement {
  /**
   * Indicates who or what performed the series.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  actor?: Reference;

  /**
   * Distinguishes the type of involvement of the performer in the series.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  function?: CodeableConcept;

  /**
   * Constructor for ImagingStudySeriesPerformer
   */
  constructor(source: Partial<ImagingStudySeriesPerformer> = {}) {
    super(source);
  }
}
