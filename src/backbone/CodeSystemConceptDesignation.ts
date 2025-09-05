import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Coding } from '../elements/Coding';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CodeSystemConceptDesignation extends BackboneElement {
  /**
   * In the absence of a language, the resource language applies.
   */
  @IsOptional()
  @IsString()
  language?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _language?: Element;

  /**
   * If no use is provided, the designation can be assumed to be suitable for general display to a human user.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  use?: Coding;

  /**
   * The text value for this designation.
   */
  @IsOptional()
  @IsString()
  value?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _value?: Element;

  /**
   * Constructor for CodeSystemConceptDesignation
   */
  constructor(source: Partial<CodeSystemConceptDesignation> = {}) {
    super(source);
  }
}
