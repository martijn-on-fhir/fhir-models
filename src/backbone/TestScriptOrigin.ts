import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Coding } from '../elements/Coding';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestScriptOrigin extends BackboneElement implements fhir.TestScriptOrigin {
  /**
   * A given origin index (e.g. 1) can appear only once in the list (e.g. Origin 1 cannot be specified twice ... once as Form
   */
  @IsOptional()
  @IsNumber()
  index?: number;

  /**
   * Must be a "sender"/"client" profile.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  profile?: Coding;

  /**
   * Constructor for TestScriptOrigin
   */
  constructor(source: Partial<TestScriptOrigin> = {}) {
    super(source);
  }
}
