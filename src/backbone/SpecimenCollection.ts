import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Duration } from '../elements/Duration';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SpecimenCollection extends BackboneElement implements fhir.SpecimenCollection {
  /**
   * If the use case requires  BodySite to be handled as a separate resource instead of an inline coded element (e.g. to iden
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  bodySite?: CodeableConcept;

  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  @IsOptional()
  @IsString()
  collectedDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _collectedDateTime?: Element;

  /**
   * Time when specimen was collected from subject - the physiologically relevant time.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  collectedPeriod?: Period;

  /**
   * Person who collected the specimen.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  collector?: Reference;

  /**
   * The span of time over which the collection of a specimen occurred.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  duration?: Duration;

  /**
   * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordina
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  fastingStatusCodeableConcept?: CodeableConcept;

  /**
   * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordina
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  fastingStatusDuration?: Duration;

  /**
   * A coded value specifying the technique that is used to perform the procedure.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  method?: CodeableConcept;

  /**
   * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomi
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * Constructor for SpecimenCollection
   */
  constructor(source: Partial<SpecimenCollection> = {}) {
    super(source);
  }
}
