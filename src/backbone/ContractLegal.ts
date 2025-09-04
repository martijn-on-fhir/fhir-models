import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Attachment } from '../elements/Attachment';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ContractLegal extends BackboneElement implements fhir.ContractLegal {
  /**
   * Contract legal text in human renderable form.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  contentAttachment?: Attachment;

  /**
   * Contract legal text in human renderable form.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  contentReference?: Reference;

  /**
   * Constructor for ContractLegal
   */
  constructor(source: Partial<ContractLegal> = {}) {
    super(source);
  }
}
