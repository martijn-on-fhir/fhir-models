import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { MedicationAdministrationDosage } from '../backbone/MedicationAdministrationDosage';
import { MedicationAdministrationPerformer } from '../backbone/MedicationAdministrationPerformer';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationAdministration extends DomainResource implements fhir.MedicationAdministration {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'MedicationAdministration' as const;

  /**
   * Indicates where the medication is expected to be consumed or administered.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /**
   * The visit, admission, or other contact between patient and health care provider during which the medication administrati
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  context?: Reference;

  /**
   * The device used in administering the medication to the patient.  For example, a particular infusion pump.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  device?: Reference[];

  /**
   * Describes the medication dosage information details e.g. dose, rate, site, route, etc.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => MedicationAdministrationDosage)
  dosage?: MedicationAdministrationDosage;

  /**
   * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'no
   */
  @IsOptional()
  @IsString()
  effectiveDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _effectiveDateTime?: Element;

  /**
   * A specific date/time or interval of time during which the administration took place (or did not take place, when the 'no
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  effectivePeriod?: Period;

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
   * A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  instantiates?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _instantiates?: Element[];

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
   * Extra information about the medication administration that is not conveyed by the other attributes.
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
   * Indicates who or what performed the medication administration and how they were involved.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicationAdministrationPerformer)
  performer?: MedicationAdministrationPerformer[];

  /**
   * A code indicating why the medication was given.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  reasonCode?: CodeableConcept[];

  /**
   * This is a reference to a condition that is the reason for the medication request.  If only a code exists, use reasonCode
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reasonReference?: Reference[];

  /**
   * This is a reference to the MedicationRequest  where the intent is either order or instance-order.  It should not referen
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  request?: Reference;

  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  @IsOptional()
  @IsIn(['in-progress', 'not-done', 'on-hold', 'completed', 'entered-in-error', 'stopped', 'unknown'])
  status?: ('in-progress'|'not-done'|'on-hold'|'completed'|'entered-in-error'|'stopped'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * A code indicating why the administration was not performed.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  statusReason?: CodeableConcept[];

  /**
   * The person or animal or group receiving the medication.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subject?: Reference;

  /**
   * Additional information (for example, patient height and weight) that supports the administration of the medication.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  supportingInformation?: Reference[];

  /**
   * Constructor for MedicationAdministration
   */
  constructor(source: Partial<MedicationAdministration> = {}) {
    super(source);
    this.resourceType = 'MedicationAdministration';
  }
}
