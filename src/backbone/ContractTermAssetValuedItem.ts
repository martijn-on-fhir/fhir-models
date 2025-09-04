import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Money } from '../elements/Money';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ContractTermAssetValuedItem extends BackboneElement implements fhir.ContractTermAssetValuedItem {
  /**
   * Indicates the time during which this Contract ValuedItem information is effective.
   */
  @IsOptional()
  @IsString()
  effectiveTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _effectiveTime?: Element;

  /**
   * Specific type of Contract Valued Item that may be priced.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  entityCodeableConcept?: CodeableConcept;

  /**
   * Specific type of Contract Valued Item that may be priced.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  entityReference?: Reference;

  /**
   * A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. 
   */
  @IsOptional()
  @IsNumber()
  factor?: number;

  /**
   * Identifies a Contract Valued Item instance.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * Id  of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResp
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  linkId?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _linkId?: Element[];

  /**
   * Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quan
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  net?: Money;

  /**
   * Terms of valuation.
   */
  @IsOptional()
  @IsString()
  payment?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _payment?: Element;

  /**
   * When payment is due.
   */
  @IsOptional()
  @IsString()
  paymentDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _paymentDate?: Element;

  /**
   * An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Con
   */
  @IsOptional()
  @IsNumber()
  points?: number;

  /**
   * Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * Who will receive payment.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  recipient?: Reference;

  /**
   * Who will make payment.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  responsible?: Reference;

  /**
   * A set of security labels that define which terms are controlled by this condition.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => number)
  securityLabelNumber?: number[];

  /**
   * A Contract Valued Item unit valuation measure.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Money)
  unitPrice?: Money;

  /**
   * Constructor for ContractTermAssetValuedItem
   */
  constructor(source: Partial<ContractTermAssetValuedItem> = {}) {
    super(source);
  }
}
