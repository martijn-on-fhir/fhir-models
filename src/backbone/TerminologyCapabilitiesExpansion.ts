import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { TerminologyCapabilitiesExpansionParameter } from './TerminologyCapabilitiesExpansionParameter';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TerminologyCapabilitiesExpansion extends BackboneElement {
  /**
   * Whether the server can return nested value sets.
   */
  @IsOptional()
  @IsBoolean()
  hierarchical?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _hierarchical?: Element;

  /**
   * Allow request for incomplete expansions?
   */
  @IsOptional()
  @IsBoolean()
  incomplete?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _incomplete?: Element;

  /**
   * Whether the server supports paging on expansion.
   */
  @IsOptional()
  @IsBoolean()
  paging?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _paging?: Element;

  /**
   * Supported expansion parameter.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TerminologyCapabilitiesExpansionParameter)
  parameter?: TerminologyCapabilitiesExpansionParameter[];

  /**
   * This documentation should cover things like case sensitivity,  use of punctuation if not ignored, what wild cards are su
   */
  @IsOptional()
  @IsString()
  textFilter?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _textFilter?: Element;

  /**
   * Constructor for TerminologyCapabilitiesExpansion
   */
  constructor(source: Partial<TerminologyCapabilitiesExpansion> = {}) {
    super(source);
  }
}
