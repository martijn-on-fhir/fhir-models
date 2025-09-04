import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { ElementDefinition } from './ElementDefinition';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class StructureDefinitionSnapshot extends BackboneElement implements fhir.StructureDefinitionSnapshot {
  /**
   * Captures constraints on each element within the resource.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ElementDefinition)
  element?: ElementDefinition[];

  /**
   * Constructor for StructureDefinitionSnapshot
   */
  constructor(source: Partial<StructureDefinitionSnapshot> = {}) {
    super(source);
  }
}
