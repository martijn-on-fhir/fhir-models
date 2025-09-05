import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TerminologyCapabilitiesClosure extends BackboneElement {
  /**
   * If cross-system closure is supported.
   */
  @IsOptional()
  @IsBoolean()
  translation?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _translation?: Element;

  /**
   * Constructor for TerminologyCapabilitiesClosure
   */
  constructor(source: Partial<TerminologyCapabilitiesClosure> = {}) {
    super(source);
  }
}
