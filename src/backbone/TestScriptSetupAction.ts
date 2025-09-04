import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { TestScriptSetupActionAssert } from './TestScriptSetupActionAssert';
import { TestScriptSetupActionOperation } from './TestScriptSetupActionOperation';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestScriptSetupAction extends BackboneElement implements fhir.TestScriptSetupAction {
  /**
   * In order to evaluate an assertion, the request, response, and results of the most recently executed operation must alway
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestScriptSetupActionAssert)
  assert?: TestScriptSetupActionAssert;

  /**
   * The operation to perform.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestScriptSetupActionOperation)
  operation?: TestScriptSetupActionOperation;

  /**
   * Constructor for TestScriptSetupAction
   */
  constructor(source: Partial<TestScriptSetupAction> = {}) {
    super(source);
  }
}
