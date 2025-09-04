import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Media extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Media' as const;

  /**
   * A procedure that is fulfilled in whole or in part by the creation of this media.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /**
   * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related obse
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  bodySite?: CodeableConcept;

  /**
   * Recommended content types: image/jpeg, image/png, image/tiff, video/mpeg, audio/mp4, application/dicom. Application/dico
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  content?: Attachment;

  /**
   * The date and time(s) at which the media was collected.
   */
  @IsOptional()
  @IsString()
  createdDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _createdDateTime?: Element;

  /**
   * The date and time(s) at which the media was collected.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  createdPeriod?: Period;

  /**
   * An extension should be used if further typing of the device is needed.  Secondary devices used to support collecting a m
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  device?: Reference;

  /**
   * The name of the device / manufacturer of the device  that was used to make the recording.
   */
  @IsOptional()
  @IsString()
  deviceName?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _deviceName?: Element;

  /**
   * The duration might differ from occurrencePeriod if recording was paused.
   */
  @IsOptional()
  @IsNumber()
  duration?: number;

  /**
   * This will typically be the encounter the media occurred within.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * if the number of frames is not supplied, the value may be unknown. Applications should not assume that there is only one
   */
  @IsOptional()
  @IsNumber()
  frames?: number;

  /**
   * Height of the image in pixels (photo/video).
   */
  @IsOptional()
  @IsNumber()
  height?: number;

  /**
   * The identifier label and use can be used to determine what kind of identifier it is.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * It may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For
   */
  @IsOptional()
  @IsString()
  issued?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _issued?: Element;

  /**
   * Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM sy
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  modality?: CodeableConcept;

  /**
   * Not to be used for observations, conclusions, etc. Instead use an [Observation](observation.html) based on the Media/Ima
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * The person who administered the collection of the image.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  operator?: Reference;

  /**
   * Not to be used to link an event to an Encounter - use Media.encounter for that. [The allowed reference resources may be 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /**
   * Textual reasons can be captured using reasonCode.text.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /**
   * A nominal state-transition diagram can be found in the [[event.html#statemachine | Event pattern]] documentation Unknown
   */
  @IsOptional()
  @IsIn(['preparation', 'in-progress', 'not-done', 'on-hold', 'stopped', 'completed', 'entered-in-error', 'unknown'])
  status?: ('preparation'|'in-progress'|'not-done'|'on-hold'|'stopped'|'completed'|'entered-in-error'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Who/What this Media is a record of.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * A code that classifies whether the media is an image, video or audio recording or some other media category.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for Media
   */
  constructor(source: Partial<Media> = {}) {
    super(source);
    this.resourceType = 'Media';
  }
}
