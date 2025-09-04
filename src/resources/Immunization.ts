import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { ImmunizationEducation } from '../backbone/ImmunizationEducation';
import { ImmunizationPerformer } from '../backbone/ImmunizationPerformer';
import { ImmunizationProtocolApplied } from '../backbone/ImmunizationProtocolApplied';
import { ImmunizationReaction } from '../backbone/ImmunizationReaction';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Immunization extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Immunization' as const;

  /**
   * The quantity of vaccine product that was administered.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  doseQuantity?: Quantity;

  /**
   * Educational material presented to the patient (or guardian) at the time of vaccine administration.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImmunizationEducation)
  education?: ImmunizationEducation[];

  /**
   * The visit or admission or other contact between patient and health care provider the immunization was performed as part 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  encounter?: Reference;

  /**
   * Date vaccine batch expires.
   */
  @IsOptional()
  @IsString()
  expirationDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _expirationDate?: Element;

  /**
   * Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  fundingSource?: CodeableConcept;

  /**
   * A unique identifier assigned to this immunization record.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Typically, the recognition of the dose being sub-potent is retrospective, after the administration (ex. notification of 
   */
  @IsOptional()
  @IsBoolean()
  isSubpotent?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _isSubpotent?: Element;

  /**
   * The service delivery location where the vaccine administration occurred.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /**
   * Lot number of the  vaccine product.
   */
  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _lotNumber?: Element;

  /**
   * Name of vaccine manufacturer.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  manufacturer?: Reference;

  /**
   * Extra information about the immunization that is not conveyed by the other attributes.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported,
   */
  @IsOptional()
  @IsString()
  occurrenceDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _occurrenceDateTime?: Element;

  /**
   * When immunizations are given a specific date and time should always be known.   When immunizations are patient reported,
   */
  @IsOptional()
  @IsString()
  occurrenceString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _occurrenceString?: Element;

  /**
   * The patient who either received or did not receive the immunization.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /**
   * Indicates who performed the immunization event.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImmunizationPerformer)
  performer?: ImmunizationPerformer[];

  /**
   * Reflects the “reliability” of the content.
   */
  @IsOptional()
  @IsBoolean()
  primarySource?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _primarySource?: Element;

  /**
   * Indicates a patient's eligibility for a funding program.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  programEligibility?: CodeableConcept[];

  /**
   * The protocol (set of recommendations) being followed by the provider who administered the dose.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImmunizationProtocolApplied)
  protocolApplied?: ImmunizationProtocolApplied[];

  /**
   * A reaction may be an indication of an allergy or intolerance and, if this is determined to be the case, it should be rec
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImmunizationReaction)
  reaction?: ImmunizationReaction[];

  /**
   * Constructor for Immunization
   */
  constructor(source: Partial<Immunization> = {}) {
    super(source);
    this.resourceType = 'Immunization';
  }
}
