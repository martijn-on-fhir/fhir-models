import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { TestReportSetupActionAssert } from './TestReportSetupActionAssert';
import { TestReportSetupActionOperation } from './TestReportSetupActionOperation';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestReportTestAction extends BackboneElement {
  /**
   * The results of the assertion performed on the previous operations.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestReportSetupActionAssert)
  assert?: TestReportSetupActionAssert;

  /**
   * An operation would involve a REST request to a server.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestReportSetupActionOperation)
  operation?: TestReportSetupActionOperation;

  /**
   * Constructor for TestReportTestAction
   */
  constructor(source: Partial<TestReportTestAction> = {}) {
    super(source);
  }
}
