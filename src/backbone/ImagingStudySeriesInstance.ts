import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Coding } from '../elements/Coding';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImagingStudySeriesInstance extends BackboneElement {
  /**
   * The number of instance in the series.
   */
  @IsOptional()
  @IsNumber()
  number?: number;

  /**
   * DICOM instance  type.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  sopClass?: Coding;

  /**
   * Particularly for post-acquisition analytic objects, such as SR, presentation states, value mapping, etc.
   */
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _title?: Element;

  /**
   * See  [DICOM PS3.3 C.12.1](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.12.html#sect_C.12.1).
   */
  @IsOptional()
  @IsString()
  uid?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _uid?: Element;

  /**
   * Constructor for ImagingStudySeriesInstance
   */
  constructor(source: Partial<ImagingStudySeriesInstance> = {}) {
    super(source);
  }
}
