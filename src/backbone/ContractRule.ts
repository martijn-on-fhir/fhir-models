import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Attachment } from '../elements/Attachment';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ContractRule extends BackboneElement {
  /**
   * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  contentAttachment?: Attachment;

  /**
   * Computable Contract conveyed using a policy rule language (e.g. XACML, DKAL, SecPal).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  contentReference?: Reference;

  /**
   * Constructor for ContractRule
   */
  constructor(source: Partial<ContractRule> = {}) {
    super(source);
  }
}
