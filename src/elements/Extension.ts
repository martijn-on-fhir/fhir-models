import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import * as fhir from '../r4';

/**
 * Optional Extension Element - a base Element that can be used to introduce additional information 
 * in a resource definition that is not part of the basic definition of the resource.
 */
export class Extension extends Element implements fhir.Extension {
  /**
   * Source of the definition for the extension code - a logical name or a URL.
   */
  @IsString()
  url!: string;

  /**
   * Primitive element extension for url
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _url?: Element;

  /**
   * Value of extension - must be one of a constrained set of the data types.
   */
  @IsOptional()
  @IsString()
  valueString?: string;

  /**
   * Primitive element extension for valueString
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueString?: Element;

  /**
   * Value of extension - must be one of a constrained set of the data types.
   */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  /**
   * Primitive element extension for valueBoolean
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueBoolean?: Element;

  /**
   * Value of extension - must be one of a constrained set of the data types.
   */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /**
   * Value of extension - must be one of a constrained set of the data types.
   */
  @IsOptional()
  @IsNumber()
  valueDecimal?: number;

  /**
   * Value of extension - must be one of a constrained set of the data types.
   */
  @IsOptional()
  @IsString()
  valueUri?: string;

  /**
   * Primitive element extension for valueUri
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueUri?: Element;

  /**
   * Value of extension - must be one of a constrained set of the data types.
   */
  @IsOptional()
  @IsString()
  valueCode?: string;

  /**
   * Primitive element extension for valueCode
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueCode?: Element;

  /**
   * Constructor for Extension
   */
  constructor(source: Partial<Extension> = {}) {
    super(source);
  }
}