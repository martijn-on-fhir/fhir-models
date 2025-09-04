import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { CoverageEligibilityRequestItemDiagnosis } from './CoverageEligibilityRequestItemDiagnosis';
import { Money } from '../elements/Money';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CoverageEligibilityRequestItem extends BackboneElement {
  /**
   * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /**
   * The plan/proposal/order describing the proposed service in detail.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  detail?: Reference[];

  /**
   * Patient diagnosis for which care is sought.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CoverageEligibilityRequestItemDiagnosis)
  diagnosis?: CoverageEligibilityRequestItemDiagnosis[];

  /**
   * Facility where the services will be provided.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  facility?: Reference;

  /**
   * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was o
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  modifier?: CodeableConcept[];

  /**
   * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  productOrService?: CodeableConcept;

  /**
   * The practitioner who is responsible for the product or service to be rendered to the patient.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  provider?: Reference;

  /**
   * The number of repetitions of a service or product.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * Exceptions, special conditions and supporting information applicable for this service or product line.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  supportingInfoSequence?: number[];

  /**
   * The amount charged to the patient by the provider for a single unit.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  unitPrice?: Money;

  /**
   * Constructor for CoverageEligibilityRequestItem
   */
  constructor(source: Partial<CoverageEligibilityRequestItem> = {}) {
    super(source);
  }
}
