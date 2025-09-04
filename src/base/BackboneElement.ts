import 'reflect-metadata';
import { IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import * as fhir from '../r4';
import { Element } from './Element';

/**
 * Base definition for all elements that are defined inside a resource - but not the root element.
 */
export class BackboneElement extends Element implements fhir.BackboneElement {
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
  modifierExtension?: Extension[];

  /**
   * Constructor for BackboneElement
   */
  constructor(source: Partial<BackboneElement> = {}) {
    super(source);
  }
}

// Forward declaration to avoid circular dependency
class Extension extends Element implements fhir.Extension {
  url!: string;
  _url?: Element;
  valueString?: string;
  _valueString?: Element;

  constructor(source: Partial<Extension> = {}) {
    super(source);
  }
}