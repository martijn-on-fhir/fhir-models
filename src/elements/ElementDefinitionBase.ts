import 'reflect-metadata';
import { IsString, IsNumber, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';

/**
 * Information about the base definition of the element, provided to make it unnecessary to trace through the deviation and original for common knowledge.
 */
export class ElementDefinitionBase extends Element {
  /**
   * This is provided to code generation, since the serialization representation in JSON differs depending on whether the base element has max > 1. Also, some forms of code generation may differ.
   */
  @IsString()
  max: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _max?: Element;

  /**
   * This is provided for consistency with max, and may affect code generation of mandatory elements of the base resource are generated differently (some reference implementations have done this).
   */
  @IsNumber()
  min: number;

  /**
   * The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [StructureDefinition](structuredefinition.html#) without a StructureDefinition.base.
   */
  @IsString()
  path: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _path?: Element;

  /**
   * Constructor for ElementDefinitionBase
   */
  constructor(source: Partial<ElementDefinitionBase> = {}) {
    super(source);
  }
}