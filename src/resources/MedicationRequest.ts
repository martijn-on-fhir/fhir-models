import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Dosage } from '../backbone/Dosage';
import { Identifier } from '../elements/Identifier';
import { MedicationRequestDispenseRequest } from '../backbone/MedicationRequestDispenseRequest';
import { MedicationRequestSubstitution } from '../backbone/MedicationRequestSubstitution';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationRequest extends DomainResource implements fhir.MedicationRequest {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'MedicationRequest' as const;

  /**
   * The date (and perhaps time) when the prescription was initially written or authored on.
   */
  @IsOptional()
  @IsString()
  authoredOn?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _authoredOn?: Element;

  /**
   * A plan or request that is fulfilled in whole or in part by this medication request.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  basedOn?: Reference[];

  /**
   * The category can be used to include where the medication is expected to be consumed or other types of requests.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  category?: CodeableConcept[];

  /**
   * This attribute should not be confused with the protocol of the medication.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  courseOfTherapyType?: CodeableConcept;

  /**
   * This element can include a detected issue that has been identified either by a decision support system or by a clinician
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  detectedIssue?: Reference[];

  /**
   * Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medic
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => MedicationRequestDispenseRequest)
  dispenseRequest?: MedicationRequestDispenseRequest;

  /**
   * If do not perform is not specified, the request is a positive request e.g. "do perform".
   */
  @IsOptional()
  @IsBoolean()
  doNotPerform?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _doNotPerform?: Element;

  /**
   * There are examples where a medication request may include the option of an oral dose or an Intravenous or Intramuscular 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Dosage)
  dosageInstruction?: Dosage[];

  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after t
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHA
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  eventHistory?: Reference[];

  /**
   * A shared identifier common to all requests that were authorized more or less simultaneously by a single author, represen
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  groupIdentifier?: Identifier;

  /**
   * This is a business identifier, not a resource identifier.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The URL pointing to a protocol, guideline, orderset, or other definition that is adhered to in whole or in part by this 
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
   * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in who
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
   * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering t
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  insurance?: Reference[];

  /**
   * It is expected that the type of requester will be restricted for different stages of a MedicationRequest.  For example, 
   */
  @IsOptional()
  @IsIn(['proposal', 'plan', 'order', 'original-order', 'reflex-order', 'filler-order', 'instance-order', 'option'])
  intent?: ('proposal'|'plan'|'order'|'original-order'|'reflex-order'|'filler-order'|'instance-order'|'option');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _intent?: Element;

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
   * Extra information about the prescription that could not be conveyed by the other attributes.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * The specified desired performer of the medication treatment (e.g. the performer of the medication administration).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  performer?: Reference;

  /**
   * Constructor for MedicationRequest
   */
  constructor(source: Partial<MedicationRequest> = {}) {
    super(source);
    this.resourceType = 'MedicationRequest';
  }
}
