import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { AdverseEventSuspectEntity } from '../backbone/AdverseEventSuspectEntity';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class AdverseEvent extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'AdverseEvent' as const;

  /**
   * Whether the event actually happened, or just had the potential to. Note that this is independent of whether anyone was a
   */
  @IsOptional()
  @IsIn(['actual', 'potential'])
  actuality?: ('actual'|'potential');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _actuality?: Element;

  /**
   * The overall type of event, intended for search and filtering purposes.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /**
   * Parties that may or should contribute or have contributed information to the adverse event, which can consist of one or 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  contributor?: Reference[];

  /**
   * The date (and perhaps time) when the adverse event occurred.
   */
  @IsOptional()
  @IsString()
  date?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _date?: Element;

  /**
   * Estimated or actual date the AdverseEvent began, in the opinion of the reporter.
   */
  @IsOptional()
  @IsString()
  detected?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _detected?: Element;

  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after t
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * This element defines the specific type of event that occurred or that was prevented from occurring.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  event?: CodeableConcept;

  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best prac
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * The information about where the adverse event occurred.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /**
   * Describes the type of outcome from the adverse event.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  outcome?: CodeableConcept;

  /**
   * The recordedDate represents the date when this particular AdverseEvent record was created in the system, not the date of
   */
  @IsOptional()
  @IsString()
  recordedDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _recordedDate?: Element;

  /**
   * Information on who recorded the adverse event.  May be the patient or a practitioner.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  recorder?: Reference;

  /**
   * AdverseEvent.referenceDocument.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  referenceDocument?: Reference[];

  /**
   * Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a c
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  resultingCondition?: Reference[];

  /**
   * Assessment whether this event was of real importance.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  seriousness?: CodeableConcept;

  /**
   * Describes the severity of the adverse event, in relation to the subject. Contrast to AdverseEvent.seriousness - a severe
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  severity?: CodeableConcept;

  /**
   * AdverseEvent.study.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  study?: Reference[];

  /**
   * If AdverseEvent.resultingCondition differs among members of the group, then use Patient as the subject.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * AdverseEvent.subjectMedicalHistory.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  subjectMedicalHistory?: Reference[];

  /**
   * Describes the entity that is suspected to have caused the adverse event.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AdverseEventSuspectEntity)
  suspectEntity?: AdverseEventSuspectEntity[];

  /**
   * Constructor for AdverseEvent
   */
  constructor(source: Partial<AdverseEvent> = {}) {
    super(source);
    this.resourceType = 'AdverseEvent';
  }
}
