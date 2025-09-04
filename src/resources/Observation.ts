import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { ObservationComponent } from '../backbone/ObservationComponent';
import { ObservationReferenceRange } from '../backbone/ObservationReferenceRange';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';
import { Ratio } from '../elements/Ratio';
import { Reference } from '../elements/Reference';
import { SampledData } from '../elements/SampledData';
import { Timing } from '../backbone/Timing';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Observation extends DomainResource implements fhir.Observation {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Observation' as const;

  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this event.  For example, a MedicationRequest may req
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
   * In addition to the required category valueset, this element allows various categorization schemes based on the owner’s d
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /**
   * *All* code-value and, if present, component.code-component.value pairs need to be taken into account to correctly unders
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * For a discussion on the ways Observations can be assembled in groups together see [Notes](observation.html#notes) below.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObservationComponent)
  component?: ObservationComponent[];

  /**
   * Null or exceptional values can be represented two ways in FHIR Observations.  One way is to simply include them in the v
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  dataAbsentReason?: CodeableConcept;

  /**
   * All the reference choices that are listed in this element can represent clinical observations and other measurements tha
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  derivedFrom?: Reference[];

  /**
   * Note that this is not meant to represent a device involved in the transmission of the result, e.g., a gateway.  Such dev
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  device?: Reference;

  /**
   * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" ti
   */
  @IsOptional()
  @IsString()
  effectiveDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _effectiveDateTime?: Element;

  /**
   * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" ti
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /**
   * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" ti
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  effectiveTiming?: Timing;

  /**
   * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" ti
   */
  @IsOptional()
  @IsString()
  effectiveInstant?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _effectiveInstant?: Element;

  /**
   * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the o
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * Typically, an observation is made about the subject - a patient, or group of patients, location, or device - and the dis
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  focus?: Reference[];

  /**
   * When using this element, an observation will typically have either a value or a set of related resources, although both 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  hasMember?: Reference[];

  /**
   * A unique identifier assigned to this observation.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Historically used for laboratory results (known as 'abnormal flag' ),  its use extends to other use cases where coded in
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  interpretation?: CodeableConcept[];

  /**
   * For Observations that don’t require review and verification, it may be the same as the [`lastUpdated` ](resource-definit
   */
  @IsOptional()
  @IsString()
  issued?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _issued?: Element;

  /**
   * Only used if not implicit in code for Observation.code.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  method?: CodeableConcept;

  /**
   * May include general statements about the observation, or statements about significant, unexpected or unreliable results 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * To link an Observation to an Encounter use `encounter`.  See the  [Notes](observation.html#obsgrouping) below for guidan
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /**
   * Who was responsible for asserting the observed value as "true".
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  performer?: Reference[];

  /**
   * Constructor for Observation
   */
  constructor(source: Partial<Observation> = {}) {
    super(source);
    this.resourceType = 'Observation';
  }
}
