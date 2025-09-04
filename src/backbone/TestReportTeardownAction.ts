import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { TestReportSetupActionOperation } from './TestReportSetupActionOperation';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestReportTeardownAction extends BackboneElement implements fhir.TestReportTeardownAction {
  /**
   * An operation would involve a REST request to a server.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestReportSetupActionOperation)
  operation?: TestReportSetupActionOperation;

  /**
   * Constructor for TestReportTeardownAction
   */
  constructor(source: Partial<TestReportTeardownAction> = {}) {
    super(source);
  }
}
