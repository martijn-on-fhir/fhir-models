import 'reflect-metadata';
import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import { Quantity } from './Quantity';

/**
 * Reference range of possible or expected values.
 */
export class SubstanceAmountReferenceRange extends Element {
  /**
   * Upper limit possible or expected.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  highLimit?: Quantity;

  /**
   * Lower limit possible or expected.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  lowLimit?: Quantity;

  /**
   * Constructor for SubstanceAmountReferenceRange
   */
  constructor(source: Partial<SubstanceAmountReferenceRange> = {}) {
    super(source);
  }
}