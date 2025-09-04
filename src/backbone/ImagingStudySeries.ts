import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Coding } from '../elements/Coding';
import { ImagingStudySeriesInstance } from './ImagingStudySeriesInstance';
import { ImagingStudySeriesPerformer } from './ImagingStudySeriesPerformer';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImagingStudySeries extends BackboneElement implements fhir.ImagingStudySeries {
  /**
   * The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/pa
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  bodySite?: Coding;

  /**
   * A description of the series.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  endpoint?: Reference[];

  /**
   * A single SOP instance within the series, e.g. an image, or presentation state.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImagingStudySeriesInstance)
  instance?: ImagingStudySeriesInstance[];

  /**
   * The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdom
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  laterality?: Coding;

  /**
   * The modality of this series sequence.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  modality?: Coding;

  /**
   * The numeric identifier of this series in the study.
   */
  @IsOptional()
  @IsNumber()
  number?: number;

  /**
   * Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource c
   */
  @IsOptional()
  @IsNumber()
  numberOfInstances?: number;

  /**
   * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, m
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImagingStudySeriesPerformer)
  performer?: ImagingStudySeriesPerformer[];

  /**
   * The specimen imaged, e.g., for whole slide imaging of a biopsy.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  specimen?: Reference[];

  /**
   * The date and time the series was started.
   */
  @IsOptional()
  @IsString()
  started?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _started?: Element;

  /**
   * See [DICOM PS3.3 C.7.3](http://dicom.nema.org/medical/dicom/current/output/chtml/part03/sect_C.7.3.html).
   */
  @IsOptional()
  @IsString()
  uid?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _uid?: Element;

  /**
   * Constructor for ImagingStudySeries
   */
  constructor(source: Partial<ImagingStudySeries> = {}) {
    super(source);
  }
}
