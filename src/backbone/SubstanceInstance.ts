import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Identifier } from '../elements/Identifier';
import { Quantity } from '../elements/Quantity';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceInstance extends BackboneElement {
  /**
   * When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
   */
  @IsOptional()
  @IsString()
  expiry?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _expiry?: Element;

  /**
   * Identifier associated with the package/container (usually a label affixed directly).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * The amount of the substance.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * Constructor for SubstanceInstance
   */
  constructor(source: Partial<SubstanceInstance> = {}) {
    super(source);
  }
}
