import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestReportSetupActionAssert extends BackboneElement implements fhir.TestReportSetupActionAssert {
  /**
   * A link to further details on the result.
   */
  @IsOptional()
  @IsString()
  detail?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _detail?: Element;

  /**
   * An explanatory message associated with the result.
   */
  @IsOptional()
  @IsString()
  message?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _message?: Element;

  /**
   * The result of this assertion.
   */
  @IsOptional()
  @IsIn(['pass', 'skip', 'fail', 'warning', 'error'])
  result?: ('pass'|'skip'|'fail'|'warning'|'error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _result?: Element;

  /**
   * Constructor for TestReportSetupActionAssert
   */
  constructor(source: Partial<TestReportSetupActionAssert> = {}) {
    super(source);
  }
}
