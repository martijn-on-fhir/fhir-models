import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Coding } from '../elements/Coding';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestScriptDestination extends BackboneElement {
  /**
   * A given destination index (e.g. 1) can appear only once in the list (e.g. Destination 1 cannot be specified twice ... on
   */
  @IsOptional()
  @IsNumber()
  index?: number;

  /**
   * Must be a "receiver"/"server" profile.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  profile?: Coding;

  /**
   * Constructor for TestScriptDestination
   */
  constructor(source: Partial<TestScriptDestination> = {}) {
    super(source);
  }
}
