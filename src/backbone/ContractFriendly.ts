import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Attachment } from '../elements/Attachment';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ContractFriendly extends BackboneElement {
  /**
   * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure un
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  contentAttachment?: Attachment;

  /**
   * Human readable rendering of this Contract in a format and representation intended to enhance comprehension and ensure un
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  contentReference?: Reference;

  /**
   * Constructor for ContractFriendly
   */
  constructor(source: Partial<ContractFriendly> = {}) {
    super(source);
  }
}
