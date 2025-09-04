import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';
import { SubstanceAmountReferenceRange } from '../elements/SubstanceAmountReferenceRange';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceAmount extends BackboneElement implements fhir.SubstanceAmount {
  /**
   * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be th
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  amountQuantity?: Quantity;

  /**
   * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be th
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  amountRange?: Range;

  /**
   * Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be th
   */
  @IsOptional()
  @IsString()
  amountString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _amountString?: Element;

  /**
   * A textual comment on a numeric value.
   */
  @IsOptional()
  @IsString()
  amountText?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _amountText?: Element;

  /**
   * Most elements that require a quantitative value will also have a field called amount type. Amount type should always be 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  amountType?: CodeableConcept;

  /**
   * Reference range of possible or expected values.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubstanceAmountReferenceRange)
  referenceRange?: SubstanceAmountReferenceRange;

  /**
   * Constructor for SubstanceAmount
   */
  constructor(source: Partial<SubstanceAmount> = {}) {
    super(source);
  }
}
