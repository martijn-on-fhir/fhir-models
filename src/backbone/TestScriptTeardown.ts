import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { TestScriptTeardownAction } from './TestScriptTeardownAction';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestScriptTeardown extends BackboneElement implements fhir.TestScriptTeardown {
  /**
   * An action should contain either an operation or an assertion but not both.  It can contain any number of variables.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestScriptTeardownAction)
  action?: TestScriptTeardownAction[];

  /**
   * Constructor for TestScriptTeardown
   */
  constructor(source: Partial<TestScriptTeardown> = {}) {
    super(source);
  }
}
