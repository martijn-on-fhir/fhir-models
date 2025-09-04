import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { GraphDefinitionLinkTarget } from './GraphDefinitionLinkTarget';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class GraphDefinitionLink extends BackboneElement implements fhir.GraphDefinitionLink {
  /**
   * Information about why this link is of interest in this graph definition.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Maximum occurrences for this link.
   */
  @IsOptional()
  @IsString()
  max?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _max?: Element;

  /**
   * Minimum occurrences for this link.
   */
  @IsOptional()
  @IsNumber()
  min?: number;

  /**
   * The path expression cannot contain a resolve() function. If there is no path, the link is a reverse lookup, using target
   */
  @IsOptional()
  @IsString()
  path?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _path?: Element;

  /**
   * Which slice (if profiled).
   */
  @IsOptional()
  @IsString()
  sliceName?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _sliceName?: Element;

  /**
   * Potential target for the link.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GraphDefinitionLinkTarget)
  target?: GraphDefinitionLinkTarget[];

  /**
   * Constructor for GraphDefinitionLink
   */
  constructor(source: Partial<GraphDefinitionLink> = {}) {
    super(source);
  }
}
