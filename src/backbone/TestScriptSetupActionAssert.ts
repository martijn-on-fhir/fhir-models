import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestScriptSetupActionAssert extends BackboneElement {
  /**
   * Thefhirpath expression to be evaluated against the expected fixture to compare to. Ignored if "assert.value" is used. Th
   */
  @IsOptional()
  @IsString()
  compareToSourceExpression?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _compareToSourceExpression?: Element;

  /**
   * Id of the source fixture used as the contents to be evaluated by either the "source/expression" or "sourceId/path" defin
   */
  @IsOptional()
  @IsString()
  compareToSourceId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _compareToSourceId?: Element;

  /**
   * The XPath or JSONPath expression to be evaluated against the expected fixture to compare to. Ignored if "assert.value" i
   */
  @IsOptional()
  @IsString()
  compareToSourcePath?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _compareToSourcePath?: Element;

  /**
   * If this is specified, then test engine shall confirm that the content-type of the last operation's headers is set to thi
   */
  @IsOptional()
  @IsString()
  contentType?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _contentType?: Element;

  /**
   * This has no impact on the verification itself.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * If the direction is specified as "response" (the default), then the processing of this assert is against the received re
   */
  @IsOptional()
  @IsIn(['response', 'request'])
  direction?: ('response'|'request');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _direction?: Element;

  /**
   * If both "expression" and a "fixtureId" are specified, then the expression will be evaluated against the request or respo
   */
  @IsOptional()
  @IsString()
  expression?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _expression?: Element;

  /**
   * If "headerField" is specified then "value" must be specified.  If "sourceId" is not specified, then "headerField" will b
   */
  @IsOptional()
  @IsString()
  headerField?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _headerField?: Element;

  /**
   * This has no impact on the verification itself.
   */
  @IsOptional()
  @IsString()
  label?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _label?: Element;

  /**
   * Asserts that the response contains all the element/content in another fixture pointed to by minimumId.  This can be a st
   */
  @IsOptional()
  @IsString()
  minimumId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _minimumId?: Element;

  /**
   * Asserts that the Bundle contains first, last, and next links.
   */
  @IsOptional()
  @IsBoolean()
  navigationLinks?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _navigationLinks?: Element;

  /**
   * Operators are useful especially for negative testing.  If operator is not specified, then the "equals" operator is assum
   */
  @IsOptional()
  @IsIn(['equals', 'notEquals', 'in', 'notIn', 'greaterThan', 'lessThan', 'empty', 'notEmpty', 'contains', 'notContains', 'eval'])
  operator?: ('equals'|'notEquals'|'in'|'notIn'|'greaterThan'|'lessThan'|'empty'|'notEmpty'|'contains'|'notContains'|'eval');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _operator?: Element;

  /**
   * If both "path" and a "fixtureId" are specified, then the path will be evaluated against the request or response body map
   */
  @IsOptional()
  @IsString()
  path?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _path?: Element;

  /**
   * If "requestMethod" is specified then it will be used in place of "value". The "requestMethod" will evaluate against the 
   */
  @IsOptional()
  @IsIn(['delete', 'get', 'options', 'patch', 'post', 'put', 'head'])
  requestMethod?: ('delete'|'get'|'options'|'patch'|'post'|'put'|'head');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _requestMethod?: Element;

  /**
   * If "requestURL" is specified then it will be used in place of "value". The "requestURL" will evaluate against the last o
   */
  @IsOptional()
  @IsString()
  requestURL?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _requestURL?: Element;

  /**
   * Constructor for TestScriptSetupActionAssert
   */
  constructor(source: Partial<TestScriptSetupActionAssert> = {}) {
    super(source);
  }
}
