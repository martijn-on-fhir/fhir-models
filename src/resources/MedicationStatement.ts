import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Dosage } from '../backbone/Dosage';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationStatement extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'MedicationStatement' as const;

  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this event.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /**
   * Indicates where the medication is expected to be consumed or administered.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /**
   * The encounter or episode of care that establishes the context for this MedicationStatement.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  context?: Reference;

  /**
   * The date when the medication statement was asserted by the information source.
   */
  @IsOptional()
  @IsString()
  dateAsserted?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _dateAsserted?: Element;

  /**
   * Likely references would be to MedicationRequest, MedicationDispense, Claim, Observation or QuestionnaireAnswers.  The mo
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  derivedFrom?: Reference[];

  /**
   * The dates included in the dosage on a Medication Statement reflect the dates for a given dose.  For example, "from Novem
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Dosage)
  dosage?: Dosage[];

  /**
   * This attribute reflects the period over which the patient consumed the medication and is expected to be populated on the
   */
  @IsOptional()
  @IsString()
  effectiveDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _effectiveDateTime?: Element;

  /**
   * This attribute reflects the period over which the patient consumed the medication and is expected to be populated on the
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

  /**
   * This is a business identifier, not a resource identifier.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  informationSource?: Reference;

  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then th
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  medicationCodeableConcept?: CodeableConcept;

  /**
   * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then th
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  medicationReference?: Reference;

  /**
   * Provides extra information about the medication statement that is not conveyed by the other attributes.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * A larger event of which this particular event is a component or step.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /**
   * This could be a diagnosis code. If a full condition record exists or additional detail is needed, use reasonForUseRefere
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /**
   * This is a reference to a condition that is the reason why the medication is being/was taken.  If only a code exists, use
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /**
   * MedicationStatement is a statement at a point in time.  The status is only representative at the point when it was asser
   */
  @IsOptional()
  @IsIn(['active', 'completed', 'entered-in-error', 'intended', 'stopped', 'on-hold', 'unknown', 'not-taken'])
  status?: ('active'|'completed'|'entered-in-error'|'intended'|'stopped'|'on-hold'|'unknown'|'not-taken');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * This is generally only used for "exception" statuses such as "not-taken", "on-hold", "cancelled" or "entered-in-error". 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  statusReason?: CodeableConcept[];

  /**
   * The person, animal or group who is/was taking the medication.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * Constructor for MedicationStatement
   */
  constructor(source: Partial<MedicationStatement> = {}) {
    super(source);
    this.resourceType = 'MedicationStatement';
  }
}
