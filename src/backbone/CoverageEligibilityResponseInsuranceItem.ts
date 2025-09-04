import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { CoverageEligibilityResponseInsuranceItemBenefit } from './CoverageEligibilityResponseInsuranceItemBenefit';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CoverageEligibilityResponseInsuranceItem extends BackboneElement {
  /**
   * A boolean flag indicating whether a preauthorization is required prior to actual service delivery.
   */
  @IsOptional()
  @IsBoolean()
  authorizationRequired?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _authorizationRequired?: Element;

  /**
   * Codes or comments regarding information or actions associated with the preauthorization.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  authorizationSupporting?: CodeableConcept[];

  /**
   * A web location for obtaining requirements or descriptive information regarding the preauthorization.
   */
  @IsOptional()
  @IsString()
  authorizationUrl?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _authorizationUrl?: Element;

  /**
   * Benefits used to date.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CoverageEligibilityResponseInsuranceItemBenefit)
  benefit?: CoverageEligibilityResponseInsuranceItemBenefit[];

  /**
   * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /**
   * For example 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is i
   */
  @IsOptional()
  @IsBoolean()
  excluded?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _excluded?: Element;

  /**
   * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was o
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  modifier?: CodeableConcept[];

  /**
   * For example: MED01, or DENT2.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  network?: CodeableConcept;

  /**
   * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  productOrService?: CodeableConcept;

  /**
   * The practitioner who is eligible for the provision of the product or service.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  provider?: Reference;

  /**
   * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  term?: CodeableConcept;

  /**
   * Indicates if the benefits apply to an individual or to the family.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  unit?: CodeableConcept;

  /**
   * Constructor for CoverageEligibilityResponseInsuranceItem
   */
  constructor(source: Partial<CoverageEligibilityResponseInsuranceItem> = {}) {
    super(source);
  }
}
