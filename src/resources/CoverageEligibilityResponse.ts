import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { CoverageEligibilityResponseError } from '../backbone/CoverageEligibilityResponseError';
import { CoverageEligibilityResponseInsurance } from '../backbone/CoverageEligibilityResponseInsurance';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CoverageEligibilityResponse extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'CoverageEligibilityResponse' as const;

  /**
   * The date this resource was created.
   */
  @IsOptional()
  @IsString()
  created?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _created?: Element;

  /**
   * A human readable description of the status of the adjudication.
   */
  @IsOptional()
  @IsString()
  disposition?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _disposition?: Element;

  /**
   * Errors encountered during the processing of the request.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CoverageEligibilityResponseError)
  error?: CoverageEligibilityResponseError[];

  /**
   * May be needed to identify specific jurisdictional forms.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  form?: CodeableConcept;

  /**
   * A unique identifier assigned to this coverage eligiblity request.
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
  @Type(() => CoverageEligibilityResponseInsurance)
  insurance?: CoverageEligibilityResponseInsurance[];

  /**
   * The Insurer who issued the coverage in question and is the author of the response.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  insurer?: Reference;

  /**
   * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed
   */
  @IsOptional()
  @IsIn(['queued', 'complete', 'error', 'partial'])
  outcome?: ('queued'|'complete'|'error'|'partial');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _outcome?: Element;

  /**
   * The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /**
   * A reference from the Insurer to which these services pertain to be used on further communication and as proof that the r
   */
  @IsOptional()
  @IsString()
  preAuthRef?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _preAuthRef?: Element;

  /**
   * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benef
   */
  @IsOptional()
  @IsIn(['auth-requirements', 'benefits', 'discovery', 'validation'])
  purpose?: Array<'auth-requirements'|'benefits'|'discovery'|'validation'>;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _purpose?: Element[];

  /**
   * Reference to the original request resource.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  request?: Reference;

  /**
   * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally resp
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  requestor?: Reference;

  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  @IsOptional()
  @IsString()
  servicedDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _servicedDate?: Element;

  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  servicedPeriod?: Period;

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
   * Constructor for CoverageEligibilityResponse
   */
  constructor(source: Partial<CoverageEligibilityResponse> = {}) {
    super(source);
    this.resourceType = 'CoverageEligibilityResponse';
  }
}
