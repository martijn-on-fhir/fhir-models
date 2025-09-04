import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
import { Timing } from './Timing';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CarePlanActivityDetail extends BackboneElement implements fhir.CarePlanActivityDetail {
  /**
   * Tends to be less relevant for activities involving particular products.  Codes should not convey negation - use "prohibi
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * Identifies the quantity expected to be consumed in a given day.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  dailyAmount?: Quantity;

  /**
   * This provides a textual description of constraints on the intended activity occurrence, including relation to other acti
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * This element is labeled as a modifier because it marks an activity as an activity that is not to be performed.
   */
  @IsOptional()
  @IsBoolean()
  doNotPerform?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _doNotPerform?: Element;

  /**
   * Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  goal?: Reference[];

  /**
   * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesCanonical?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _instantiatesCanonical?: Element[];

  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiatesUri?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _instantiatesUri?: Element[];

  /**
   * A description of the kind of resource the in-line definition of a care plan activity is representing.  The CarePlan.acti
   */
  @IsOptional()
  @IsIn(['Appointment', 'CommunicationRequest', 'DeviceRequest', 'MedicationRequest', 'NutritionOrder', 'Task', 'ServiceRequest', 'VisionPrescription'])
  kind?: ('Appointment'|'CommunicationRequest'|'DeviceRequest'|'MedicationRequest'|'NutritionOrder'|'Task'|'ServiceRequest'|'VisionPrescription');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _kind?: Element;

  /**
   * May reference a specific clinical location or may identify a type of location.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /**
   * A performer MAY also be a participant in the care plan.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  performer?: Reference[];

  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  productCodeableConcept?: CodeableConcept;

  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  productReference?: Reference;

  /**
   * Identifies the quantity expected to be supplied, administered or consumed by the subject.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * This could be a diagnosis code.  If a full condition record exists or additional detail is needed, use reasonCondition i
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /**
   * Conditions can be identified at the activity level that are not identified as reasons for the overall plan.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  scheduledTiming?: Timing;

  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  scheduledPeriod?: Period;

  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  @IsOptional()
  @IsString()
  scheduledString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _scheduledString?: Element;

  /**
   * Some aspects of status can be inferred based on the resources linked in actionTaken.  Note that "status" is only as curr
   */
  @IsOptional()
  @IsIn(['not-started', 'scheduled', 'in-progress', 'on-hold', 'completed', 'cancelled', 'stopped', 'unknown', 'entered-in-error'])
  status?: ('not-started'|'scheduled'|'in-progress'|'on-hold'|'completed'|'cancelled'|'stopped'|'unknown'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Will generally not be present if status is "complete".  Be sure to prompt to update this (or at least remove the existin
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  statusReason?: CodeableConcept;

  /**
   * Constructor for CarePlanActivityDetail
   */
  constructor(source: Partial<CarePlanActivityDetail> = {}) {
    super(source);
  }
}
