import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ValueSetExpansionParameter extends BackboneElement implements fhir.ValueSetExpansionParameter {
  /**
   * The names are assigned at the discretion of the server.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * The value of the parameter.
   */
  @IsOptional()
  @IsString()
  valueString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueString?: Element;

  /**
   * The value of the parameter.
   */
  @IsOptional()
  @IsBoolean()
  valueBoolean?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueBoolean?: Element;

  /**
   * The value of the parameter.
   */
  @IsOptional()
  @IsNumber()
  valueInteger?: number;

  /**
   * The value of the parameter.
   */
  @IsOptional()
  @IsNumber()
  valueDecimal?: number;

  /**
   * The value of the parameter.
   */
  @IsOptional()
  @IsString()
  valueUri?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueUri?: Element;

  /**
   * The value of the parameter.
   */
  @IsOptional()
  @IsString()
  valueCode?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueCode?: Element;

  /**
   * The value of the parameter.
   */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueDateTime?: Element;

  /**
   * Constructor for ValueSetExpansionParameter
   */
  constructor(source: Partial<ValueSetExpansionParameter> = {}) {
    super(source);
  }
}
