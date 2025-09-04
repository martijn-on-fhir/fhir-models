import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ExplanationOfBenefitBenefitBalanceFinancial } from './ExplanationOfBenefitBenefitBalanceFinancial';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ExplanationOfBenefitBenefitBalance extends BackboneElement {
  /**
   * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  category?: CodeableConcept;

  /**
   * For example, 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
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
   * Benefits Used to date.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExplanationOfBenefitBenefitBalanceFinancial)
  financial?: ExplanationOfBenefitBenefitBalanceFinancial[];

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
   * Constructor for ExplanationOfBenefitBenefitBalance
   */
  constructor(source: Partial<ExplanationOfBenefitBenefitBalance> = {}) {
    super(source);
  }
}
