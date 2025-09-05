import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CapabilityStatementRestResourceSearchParam extends BackboneElement {
  /**
   * This SHOULD be present, and matches refers to a SearchParameter by its canonical URL. If systems wish to document their 
   */
  @IsOptional()
  @IsString()
  definition?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _definition?: Element;

  /**
   * This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching 
   */
  @IsOptional()
  @IsString()
  documentation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _documentation?: Element;

  /**
   * Parameter names cannot overlap with standard parameter names, and standard parameters cannot be redefined.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * While this can be looked up from the definition, it is included here as a convenience for systems that autogenerate a qu
   */
  @IsOptional()
  @IsIn(['number', 'date', 'string', 'token', 'reference', 'composite', 'quantity', 'uri', 'special'])
  type?: ('number'|'date'|'string'|'token'|'reference'|'composite'|'quantity'|'uri'|'special');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for CapabilityStatementRestResourceSearchParam
   */
  constructor(source: Partial<CapabilityStatementRestResourceSearchParam> = {}) {
    super(source);
  }
}
