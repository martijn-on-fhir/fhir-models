import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { TestReportTestAction } from './TestReportTestAction';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestReportTest extends BackboneElement {
  /**
   * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestReportTestAction)
  action?: TestReportTestAction[];

  /**
   * A short description of the test used by test engines for tracking and reporting purposes.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * The name of this test used for tracking/logging purposes by test engines.
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * Constructor for TestReportTest
   */
  constructor(source: Partial<TestReportTest> = {}) {
    super(source);
  }
}
