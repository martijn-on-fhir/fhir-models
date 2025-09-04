import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class StructureDefinitionContext extends BackboneElement implements fhir.StructureDefinitionContext {
  /**
   * An expression that defines where an extension can be used in resources.
   */
  @IsOptional()
  @IsString()
  expression?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _expression?: Element;

  /**
   * Defines how to interpret the expression that defines what the context of the extension is.
   */
  @IsOptional()
  @IsIn(['fhirpath', 'element', 'extension'])
  type?: ('fhirpath'|'element'|'extension');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for StructureDefinitionContext
   */
  constructor(source: Partial<StructureDefinitionContext> = {}) {
    super(source);
  }
}
