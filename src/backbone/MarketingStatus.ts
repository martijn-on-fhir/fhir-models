import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MarketingStatus extends BackboneElement {
  /**
   * The country in which the marketing authorisation has been granted shall be specified It should be specified using the IS
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  country?: CodeableConcept;

  /**
   * The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  dateRange?: Period;

  /**
   * Where a Medicines Regulatory Agency has granted a marketing authorisation for which specific provisions within a jurisdi
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  jurisdiction?: CodeableConcept;

  /**
   * The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, 
   */
  @IsOptional()
  @IsString()
  restoreDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _restoreDate?: Element;

  /**
   * This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more in
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  status?: CodeableConcept;

  /**
   * Constructor for MarketingStatus
   */
  constructor(source: Partial<MarketingStatus> = {}) {
    super(source);
  }
}
