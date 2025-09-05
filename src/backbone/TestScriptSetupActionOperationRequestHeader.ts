import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestScriptSetupActionOperationRequestHeader extends BackboneElement {
  /**
   * If header element is specified, then field is required.
   */
  @IsOptional()
  @IsString()
  field?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _field?: Element;

  /**
   * If header element is specified, then value is required.  No conversions will be done by the test engine e.g. "xml" to "a
   */
  @IsOptional()
  @IsString()
  value?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _value?: Element;

  /**
   * Constructor for TestScriptSetupActionOperationRequestHeader
   */
  constructor(source: Partial<TestScriptSetupActionOperationRequestHeader> = {}) {
    super(source);
  }
}
