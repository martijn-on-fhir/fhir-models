import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { OperationDefinitionParameterBinding } from './OperationDefinitionParameterBinding';
import { OperationDefinitionParameterReferencedFrom } from './OperationDefinitionParameterReferencedFrom';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class OperationDefinitionParameter extends BackboneElement implements fhir.OperationDefinitionParameter {
  /**
   * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => OperationDefinitionParameterBinding)
  binding?: OperationDefinitionParameterBinding;

  /**
   * Describes the meaning or use of this parameter.
   */
  @IsOptional()
  @IsString()
  documentation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _documentation?: Element;

  /**
   * The maximum number of times this element is permitted to appear in the request or response.
   */
  @IsOptional()
  @IsString()
  max?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _max?: Element;

  /**
   * The minimum number of times this parameter SHALL appear in the request or response.
   */
  @IsOptional()
  @IsNumber()
  min?: number;

  /**
   * This name must be a token (start with a letter in a..z, and only contain letters, numerals, and underscore. Note that fo
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a pro
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OperationDefinitionParameter)
  part?: OperationDefinitionParameter[];

  /**
   * Resolution applies if the referenced parameter exists.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OperationDefinitionParameterReferencedFrom)
  referencedFrom?: OperationDefinitionParameterReferencedFrom[];

  /**
   * How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'.
   */
  @IsOptional()
  @IsIn(['number', 'date', 'string', 'token', 'reference', 'composite', 'quantity', 'uri', 'special'])
  searchType?: ('number'|'date'|'string'|'token'|'reference'|'composite'|'quantity'|'uri'|'special');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _searchType?: Element;

  /**
   * Often, these profiles are the base definitions from the spec (e.g. http://hl7.org/fhir/StructureDefinition/Patient).
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  targetProfile?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _targetProfile?: Element[];

  /**
   * if there is no stated parameter, then the parameter is a multi-part parameter; type and must have at least one part defi
   */
  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * If a parameter name is used for both an input and an output parameter, the parameter should be defined twice.
   */
  @IsOptional()
  @IsIn(['in', 'out'])
  use?: ('in'|'out');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _use?: Element;

  /**
   * Constructor for OperationDefinitionParameter
   */
  constructor(source: Partial<OperationDefinitionParameter> = {}) {
    super(source);
  }
}
