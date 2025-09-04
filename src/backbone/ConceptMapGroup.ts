import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { ConceptMapGroupElement } from './ConceptMapGroupElement';
import { ConceptMapGroupUnmapped } from './ConceptMapGroupUnmapped';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ConceptMapGroup extends BackboneElement implements fhir.ConceptMapGroup {
  /**
   * Generally, the ideal is that there would only be one mapping for each concept in the source value set, but a given conce
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ConceptMapGroupElement)
  element?: ConceptMapGroupElement[];

  /**
   * This is not needed if the source value set is specified and it contains concepts from only a single system.
   */
  @IsOptional()
  @IsString()
  source?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _source?: Element;

  /**
   * The specification of a particular code system version may be required for code systems which lack concept permanence.
   */
  @IsOptional()
  @IsString()
  sourceVersion?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _sourceVersion?: Element;

  /**
   * This is not needed if the target value set is specified and it contains concepts from only a single system. The group ta
   */
  @IsOptional()
  @IsString()
  target?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _target?: Element;

  /**
   * The specification of a particular code system version may be required for code systems which lack concept permanence.
   */
  @IsOptional()
  @IsString()
  targetVersion?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _targetVersion?: Element;

  /**
   * This only applies if the source code has a system value that matches the system defined for the group.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ConceptMapGroupUnmapped)
  unmapped?: ConceptMapGroupUnmapped;

  /**
   * Constructor for ConceptMapGroup
   */
  constructor(source: Partial<ConceptMapGroup> = {}) {
    super(source);
  }
}
