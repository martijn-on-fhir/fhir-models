import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { TestScriptSetupActionOperation } from './TestScriptSetupActionOperation';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestScriptTeardownAction extends BackboneElement implements fhir.TestScriptTeardownAction {
  /**
   * An operation would involve a REST request to a server.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => TestScriptSetupActionOperation)
  operation?: TestScriptSetupActionOperation;

  /**
   * Constructor for TestScriptTeardownAction
   */
  constructor(source: Partial<TestScriptTeardownAction> = {}) {
    super(source);
  }
}
