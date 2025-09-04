import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { TestScriptSetupAction } from './TestScriptSetupAction';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestScriptSetup extends BackboneElement implements fhir.TestScriptSetup {
  /**
   * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestScriptSetupAction)
  action?: TestScriptSetupAction[];

  /**
   * Constructor for TestScriptSetup
   */
  constructor(source: Partial<TestScriptSetup> = {}) {
    super(source);
  }
}
