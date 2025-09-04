import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Coding } from '../elements/Coding';
import { Reference } from '../elements/Reference';
import { Signature } from '../elements/Signature';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ContractSigner extends BackboneElement {
  /**
   * Party which is a signator to this Contract.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  party?: Reference;

  /**
   * Legally binding Contract DSIG signature contents in Base64.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Signature)
  signature?: Signature[];

  /**
   * Role of this Contract signer, e.g. notary, grantee.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  type?: Coding;

  /**
   * Constructor for ContractSigner
   */
  constructor(source: Partial<ContractSigner> = {}) {
    super(source);
  }
}
