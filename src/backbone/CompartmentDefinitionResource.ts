import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CompartmentDefinitionResource extends BackboneElement implements fhir.CompartmentDefinitionResource {
  /**
   * The name of a resource supported by the server.
   */
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * Additional documentation about the resource and compartment.
   */
  @IsOptional()
  @IsString()
  documentation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _documentation?: Element;

  /**
   * If no search parameters are listed, then the resource is not linked to the compartment.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  param?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _param?: Element[];

  /**
   * Constructor for CompartmentDefinitionResource
   */
  constructor(source: Partial<CompartmentDefinitionResource> = {}) {
    super(source);
  }
}
