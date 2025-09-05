import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { ElementDefinition } from './ElementDefinition';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class StructureDefinitionDifferential extends BackboneElement {
  /**
   * Captures constraints on each element within the resource.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ElementDefinition)
  element?: ElementDefinition[];

  /**
   * Constructor for StructureDefinitionDifferential
   */
  constructor(source: Partial<StructureDefinitionDifferential> = {}) {
    super(source);
  }
}
