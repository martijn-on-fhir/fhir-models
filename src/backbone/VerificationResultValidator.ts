import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Reference } from '../elements/Reference';
import { Signature } from '../elements/Signature';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class VerificationResultValidator extends BackboneElement {
  /**
   * Signed assertion by the validator that they have validated the information.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Signature)
  attestationSignature?: Signature;

  /**
   * A digital identity certificate associated with the validator.
   */
  @IsOptional()
  @IsString()
  identityCertificate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _identityCertificate?: Element;

  /**
   * Reference to the organization validating information.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  organization?: Reference;

  /**
   * Constructor for VerificationResultValidator
   */
  constructor(source: Partial<VerificationResultValidator> = {}) {
    super(source);
  }
}
