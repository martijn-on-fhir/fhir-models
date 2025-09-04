import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Dosage } from '../backbone/Dosage';
import { Identifier } from '../elements/Identifier';
import { MedicationDispensePerformer } from '../backbone/MedicationDispensePerformer';
import { MedicationDispenseSubstitution } from '../backbone/MedicationDispenseSubstitution';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationDispense extends DomainResource implements fhir.MedicationDispense {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'MedicationDispense' as const;

  /**
   * Maps to basedOn in Event logical model.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  authorizingPrescription?: Reference[];

  /**
   * The category can be used to include where the medication is expected to be consumed or other types of dispenses.  Invari
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /**
   * The encounter or episode of care that establishes the context for this event.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  context?: Reference;

  /**
   * The amount of medication expressed as a timing amount.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  daysSupply?: Quantity;

  /**
   * Identification of the facility/location where the medication was shipped to, as part of the dispense event.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  destination?: Reference;

  /**
   * This element can include a detected issue that has been identified either by a decision support system or by a clinician
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  detectedIssue?: Reference[];

  /**
   * When the dose or rate is intended to change over the entire administration period (e.g. Tapering dose prescriptions), mu
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Dosage)
  dosageInstruction?: Dosage[];

  /**
   * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHA
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  eventHistory?: Reference[];

  /**
   * This is a business identifier, not a resource identifier.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The principal physical location where the dispense was performed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

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
   * Extra information about the dispense that could not be conveyed in the other attributes.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * The procedure that trigger the dispense.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  partOf?: Reference[];

  /**
   * Indicates who or what performed the event.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationDispensePerformer)
  performer?: MedicationDispensePerformer[];

  /**
   * The amount of medication that has been dispensed. Includes unit of measure.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases e
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  receiver?: Reference[];

  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  @IsOptional()
  @IsIn(['preparation', 'in-progress', 'cancelled', 'on-hold', 'completed', 'entered-in-error', 'stopped', 'declined', 'unknown'])
  status?: ('preparation'|'in-progress'|'cancelled'|'on-hold'|'completed'|'entered-in-error'|'stopped'|'declined'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Indicates the reason why a dispense was not performed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  statusReasonCodeableConcept?: CodeableConcept;

  /**
   * Indicates the reason why a dispense was not performed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  statusReasonReference?: Reference;

  /**
   * SubstanceAdministration->subject->Patient.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected bu
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => MedicationDispenseSubstitution)
  substitution?: MedicationDispenseSubstitution;

  /**
   * Additional information that supports the medication being dispensed.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  supportingInformation?: Reference[];

  /**
   * Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Em
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for MedicationDispense
   */
  constructor(source: Partial<MedicationDispense> = {}) {
    super(source);
    this.resourceType = 'MedicationDispense';
  }
}
