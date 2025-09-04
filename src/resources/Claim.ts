import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { ClaimAccident } from '../backbone/ClaimAccident';
import { ClaimCareTeam } from '../backbone/ClaimCareTeam';
import { ClaimDiagnosis } from '../backbone/ClaimDiagnosis';
import { ClaimInsurance } from '../backbone/ClaimInsurance';
import { ClaimItem } from '../backbone/ClaimItem';
import { ClaimPayee } from '../backbone/ClaimPayee';
import { ClaimProcedure } from '../backbone/ClaimProcedure';
import { ClaimRelated } from '../backbone/ClaimRelated';
import { ClaimSupportingInfo } from '../backbone/ClaimSupportingInfo';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Money } from '../elements/Money';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Claim extends DomainResource implements fhir.Claim {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Claim' as const;

  /**
   * Details of an accident which resulted in injuries which required the products and services listed in the claim.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ClaimAccident)
  accident?: ClaimAccident;

  /**
   * Typically this would be today or in the past for a claim, and today or in the future for preauthorizations and predeterm
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  billablePeriod?: Period;

  /**
   * The members of the team who provided the products and services.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimCareTeam)
  careTeam?: ClaimCareTeam[];

  /**
   * This field is independent of the date of creation of the resource as it may reflect the creation date of a source docume
   */
  @IsOptional()
  @IsString()
  created?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _created?: Element;

  /**
   * Information about diagnoses relevant to the claim items.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimDiagnosis)
  diagnosis?: ClaimDiagnosis[];

  /**
   * Individual who created the claim, predetermination or preauthorization.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  enterer?: Reference;

  /**
   * Facility where the services were provided.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  facility?: Reference;

  /**
   * This field is only used for preauthorizations.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  fundsReserve?: CodeableConcept;

  /**
   * A unique identifier assigned to this claim.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed i
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimInsurance)
  insurance?: ClaimInsurance[];

  /**
   * The Insurer who is target of the request.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  insurer?: Reference;

  /**
   * A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimItem)
  item?: ClaimItem[];

  /**
   * For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the p
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  originalPrescription?: Reference;

  /**
   * The party to whom the professional services and/or products have been supplied or are being considered and for whom actu
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /**
   * Often providers agree to receive the benefits payable to reduce the near-term costs to the patient. The insurer may decl
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ClaimPayee)
  payee?: ClaimPayee;

  /**
   * Prescription to support the dispensing of pharmacy, device or vision products.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  prescription?: Reference;

  /**
   * If a claim processor is unable to complete the processing as per the priority then they should generate and error and no
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  priority?: CodeableConcept;

  /**
   * Procedures performed on the patient relevant to the billing items with the claim.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimProcedure)
  procedure?: ClaimProcedure[];

  /**
   * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally resp
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  provider?: Reference;

  /**
   * The referral resource which lists the date, practitioner, reason and other supporting information.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  referral?: Reference;

  /**
   * For example,  for the original treatment and follow-up exams.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ClaimRelated)
  related?: ClaimRelated[];

  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  @IsOptional()
  @IsIn(['active', 'cancelled', 'draft', 'entered-in-error'])
  status?: ('active'|'cancelled'|'draft'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * This may contain the local bill type codes, for example the US UB-04 bill type code or the CMS bill type.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  subType?: CodeableConcept;

  /**
   * Constructor for Claim
   */
  constructor(source: Partial<Claim> = {}) {
    super(source);
    this.resourceType = 'Claim';
  }
}
