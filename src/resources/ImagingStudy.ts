import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Coding } from '../elements/Coding';
import { Identifier } from '../elements/Identifier';
import { ImagingStudySeries } from '../backbone/ImagingStudySeries';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImagingStudy extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'ImagingStudy' as const;

  /**
   * A list of the diagnostic requests that resulted in this imaging study being performed.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /**
   * The Imaging Manager description of the study. Institution-generated description or classification of the Study (componen
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the o
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * Typical endpoint types include DICOM WADO-RS, which is used to retrieve DICOM instances in native or rendered (e.g., JPG
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  endpoint?: Reference[];

  /**
   * See discussion under [Imaging Study Implementation Notes](imagingstudy.html#notes) for encoding of DICOM Study Instance 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Who read the study and interpreted the images or other content.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  interpreter?: Reference[];

  /**
   * The principal physical location where the ImagingStudy was performed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /**
   * A list of all the series.modality values that are actual acquisition modalities, i.e. those in the DICOM Context Group 2
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  modality?: Coding[];

  /**
   * Per the recommended DICOM mapping, this element is derived from the Study Description attribute (0008,1030). Observation
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource cont
   */
  @IsOptional()
  @IsNumber()
  numberOfInstances?: number;

  /**
   * Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains 
   */
  @IsOptional()
  @IsNumber()
  numberOfSeries?: number;

  /**
   * The code for the performed procedure type.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  procedureCode?: CodeableConcept[];

  /**
   * The procedure which this ImagingStudy was part of.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  procedureReference?: Reference;

  /**
   * Description of clinical condition indicating why the ImagingStudy was requested.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /**
   * Indicates another resource whose existence justifies this Study.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /**
   * The requesting/referring physician.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  referrer?: Reference;

  /**
   * Each study has one or more series of images or other content.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImagingStudySeries)
  series?: ImagingStudySeries[];

  /**
   * Date and time the study started.
   */
  @IsOptional()
  @IsString()
  started?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _started?: Element;

  /**
   * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system 
   */
  @IsOptional()
  @IsIn(['registered', 'available', 'cancelled', 'entered-in-error', 'unknown'])
  status?: ('registered'|'available'|'cancelled'|'entered-in-error'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * QA phantoms can be recorded with a Device; multiple subjects (such as mice) can be recorded with a Group.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * Constructor for ImagingStudy
   */
  constructor(source: Partial<ImagingStudy> = {}) {
    super(source);
    this.resourceType = 'ImagingStudy';
  }
}
