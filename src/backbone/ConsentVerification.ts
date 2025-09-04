import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ConsentVerification extends BackboneElement {
  /**
   * Date verification was collected.
   */
  @IsOptional()
  @IsString()
  verificationDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _verificationDate?: Element;

  /**
   * Has the instruction been verified.
   */
  @IsOptional()
  @IsBoolean()
  verified?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _verified?: Element;

  /**
   * Who verified the instruction (Patient, Relative or other Authorized Person).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  verifiedWith?: Reference;

  /**
   * Constructor for ConsentVerification
   */
  constructor(source: Partial<ConsentVerification> = {}) {
    super(source);
  }
}
