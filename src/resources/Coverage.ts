import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { CoverageClass } from '../backbone/CoverageClass';
import { CoverageCostToBeneficiary } from '../backbone/CoverageCostToBeneficiary';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Coverage extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Coverage' as const;

  /**
   * The party who benefits from the insurance coverage; the patient when products and/or services are provided.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  beneficiary?: Reference;

  /**
   * For example may be used to identify a class of coverage or employer group, Policy, Plan.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CoverageClass)
  class?: CoverageClass[];

  /**
   * The policy(s) which constitute this insurance coverage.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  contract?: Reference[];

  /**
   * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CoverageCostToBeneficiary)
  costToBeneficiary?: CoverageCostToBeneficiary[];

  /**
   * Periodically the member number is constructed from the subscriberId and the dependant number.
   */
  @IsOptional()
  @IsString()
  dependent?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _dependent?: Element;

  /**
   * The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Persona
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment
   */
  @IsOptional()
  @IsString()
  network?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _network?: Element;

  /**
   * The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be
   */
  @IsOptional()
  @IsNumber()
  order?: number;

  /**
   * May provide multiple identifiers such as insurance company identifier or business identifier (BIN number). For selfpay i
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  payor?: Reference[];

  /**
   * Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * For example: may be an individual, corporation or the subscriber's employer.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  policyHolder?: Reference;

  /**
   * Typically, an individual uses policies which are theirs (relationship='self') before policies owned by others.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  relationship?: CodeableConcept;

  /**
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the coverage as n
   */
  @IsOptional()
  @IsIn(['active', 'cancelled', 'draft', 'entered-in-error'])
  status?: ('active'|'cancelled'|'draft'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Typically, automotive and worker's compensation policies would be flagged with 'subrogation=true' to enable healthcare p
   */
  @IsOptional()
  @IsBoolean()
  subrogation?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _subrogation?: Element;

  /**
   * May be self or a parent in the case of dependants.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  subscriber?: Reference;

  /**
   * The insurer assigned ID for the Subscriber.
   */
  @IsOptional()
  @IsString()
  subscriberId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _subscriberId?: Element;

  /**
   * The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or paym
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for Coverage
   */
  constructor(source: Partial<Coverage> = {}) {
    super(source);
    this.resourceType = 'Coverage';
  }
}
