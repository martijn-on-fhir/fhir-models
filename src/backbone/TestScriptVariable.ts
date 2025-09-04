import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestScriptVariable extends BackboneElement implements fhir.TestScriptVariable {
  /**
   * The purpose of this element is to allow for a pre-defined value that can be used as a default or as an override value. T
   */
  @IsOptional()
  @IsString()
  defaultValue?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _defaultValue?: Element;

  /**
   * A free text natural language description of the variable and its purpose.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If exp
   */
  @IsOptional()
  @IsString()
  expression?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _expression?: Element;

  /**
   * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If pat
   */
  @IsOptional()
  @IsString()
  headerField?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _headerField?: Element;

  /**
   * Displayable text string with hint help information to the user when entering a default value.
   */
  @IsOptional()
  @IsString()
  hint?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _hint?: Element;

  /**
   * Placeholders would contain the variable name wrapped in ${} in "operation.params", "operation.requestHeader.value", and 
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If exp
   */
  @IsOptional()
  @IsString()
  path?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _path?: Element;

  /**
   * This can be a statically defined fixture (at the top of the TestScript) or a dynamically set fixture created by response
   */
  @IsOptional()
  @IsString()
  sourceId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _sourceId?: Element;

  /**
   * Constructor for TestScriptVariable
   */
  constructor(source: Partial<TestScriptVariable> = {}) {
    super(source);
  }
}
