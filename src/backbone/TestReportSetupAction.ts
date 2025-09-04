import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { TestReportSetupActionAssert } from './TestReportSetupActionAssert';
import { TestReportSetupActionOperation } from './TestReportSetupActionOperation';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestReportSetupAction extends BackboneElement implements fhir.TestReportSetupAction {
  /**
   * The results of the assertion performed on the previous operations.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestReportSetupActionAssert)
  assert?: TestReportSetupActionAssert;

  /**
   * The operation performed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestReportSetupActionOperation)
  operation?: TestReportSetupActionOperation;

  /**
   * Constructor for TestReportSetupAction
   */
  constructor(source: Partial<TestReportSetupAction> = {}) {
    super(source);
  }
}
