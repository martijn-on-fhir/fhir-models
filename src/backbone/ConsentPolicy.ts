import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ConsentPolicy extends BackboneElement {
  /**
   * Entity or Organization having regulatory jurisdiction or accountability for  enforcing policies pertaining to Consent Di
   */
  @IsOptional()
  @IsString()
  authority?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _authority?: Element;

  /**
   * This element is for discoverability / documentation and does not modify or qualify the policy rules.
   */
  @IsOptional()
  @IsString()
  uri?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _uri?: Element;

  /**
   * Constructor for ConsentPolicy
   */
  constructor(source: Partial<ConsentPolicy> = {}) {
    super(source);
  }
}
