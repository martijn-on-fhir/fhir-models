import 'reflect-metadata';
import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import * as fhir from '../r4';

/**
 * Base definition for all elements in a resource.
 */
export class Element implements fhir.Element {
  /**
   * Unique id for the element within a resource (for internal references). 
   * This may be any string value that does not contain spaces.
   */
  @IsOptional()
  @IsString()
  id?: string;

  /**
   * Primitive element extension
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _id?: Element;

  /**
   * There can be no stigma associated with the use of extensions by any application, 
   * project, or standard - regardless of the institution or jurisdiction that uses 
   * or defines the extensions. The use of extensions is what allows the FHIR 
   * specification to retain a core level of simplicity for everyone.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Extension)
  extension?: Extension[];

  /**
   * Constructor for Element
   */
  constructor(source: Partial<Element> = {}) {
    Object.assign(this, source);
  }
}

// Forward declaration to avoid circular dependency
class Extension extends Element implements fhir.Extension {
  @IsString()
  url!: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _url?: Element;

  // Value properties - only include the most commonly used ones to avoid circular dependencies
  @IsOptional()
  @IsString()
  valueString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueString?: Element;

  constructor(source: Partial<Extension> = {}) {
    super(source);
  }
}