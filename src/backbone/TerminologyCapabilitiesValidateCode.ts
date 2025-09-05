import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TerminologyCapabilitiesValidateCode extends BackboneElement {
  /**
   * Whether translations are validated.
   */
  @IsOptional()
  @IsBoolean()
  translations?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _translations?: Element;

  /**
   * Constructor for TerminologyCapabilitiesValidateCode
   */
  constructor(source: Partial<TerminologyCapabilitiesValidateCode> = {}) {
    super(source);
  }
}
