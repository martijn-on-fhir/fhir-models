import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CapabilityStatementRestInteraction extends BackboneElement {
  /**
   * A coded identifier of the operation, supported by the system.
   */
  @IsOptional()
  @IsIn(['transaction', 'batch', 'search-system', 'history-system'])
  code?: ('transaction'|'batch'|'search-system'|'history-system');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * Guidance specific to the implementation of this operation, such as limitations on the kind of transactions allowed, or i
   */
  @IsOptional()
  @IsString()
  documentation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _documentation?: Element;

  /**
   * Constructor for CapabilityStatementRestInteraction
   */
  constructor(source: Partial<CapabilityStatementRestInteraction> = {}) {
    super(source);
  }
}
