import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Coding } from '../elements/Coding';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ContractTermSecurityLabel extends BackboneElement implements fhir.ContractTermSecurityLabel {
  /**
   * Security label privacy tag that species the applicable privacy and security policies governing this term and/or term ele
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  category?: Coding[];

  /**
   * Security label privacy tag that species the level of confidentiality protection required for this term and/or term eleme
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  classification?: Coding;

  /**
   * Security label privacy tag that species the manner in which term and/or term elements are to be protected.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  control?: Coding[];

  /**
   * Number used to link this term or term element to the applicable Security Label.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => number)
  number?: number[];

  /**
   * Constructor for ContractTermSecurityLabel
   */
  constructor(source: Partial<ContractTermSecurityLabel> = {}) {
    super(source);
  }
}
