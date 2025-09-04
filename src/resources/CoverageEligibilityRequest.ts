import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { CoverageEligibilityRequestInsurance } from '../backbone/CoverageEligibilityRequestInsurance';
import { CoverageEligibilityRequestItem } from '../backbone/CoverageEligibilityRequestItem';
import { CoverageEligibilityRequestSupportingInfo } from '../backbone/CoverageEligibilityRequestSupportingInfo';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CoverageEligibilityRequest extends DomainResource implements fhir.CoverageEligibilityRequest {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'CoverageEligibilityRequest' as const;

  /**
   * The date when this resource was created.
   */
  @IsOptional()
  @IsString()
  created?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _created?: Element;

  /**
   * Person who created the request.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  enterer?: Reference;

  /**
   * Facility where the services are intended to be provided.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  facility?: Reference;

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
  @Type(() => CoverageEligibilityRequestInsurance)
  insurance?: CoverageEligibilityRequestInsurance[];

  /**
   * The Insurer who issued the coverage in question and is the recipient of the request.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  insurer?: Reference;

  /**
   * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CoverageEligibilityRequestItem)
  item?: CoverageEligibilityRequestItem[];

  /**
   * 1..1.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /**
   * When the requestor expects the processor to complete processing.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  priority?: CodeableConcept;

  /**
   * Typically this field would be 1..1 where this party is responsible for the eligibility request but not necessarily profe
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  provider?: Reference;

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
   * Often there are multiple jurisdiction specific valuesets which are required.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CoverageEligibilityRequestSupportingInfo)
  supportingInfo?: CoverageEligibilityRequestSupportingInfo[];

  /**
   * Constructor for CoverageEligibilityRequest
   */
  constructor(source: Partial<CoverageEligibilityRequest> = {}) {
    super(source);
    this.resourceType = 'CoverageEligibilityRequest';
  }
}
