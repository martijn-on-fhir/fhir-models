import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestScriptFixture extends BackboneElement {
  /**
   * Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each serv
   */
  @IsOptional()
  @IsBoolean()
  autocreate?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _autocreate?: Element;

  /**
   * Whether or not to implicitly delete the fixture during teardown. If true, the fixture is automatically deleted on each s
   */
  @IsOptional()
  @IsBoolean()
  autodelete?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _autodelete?: Element;

  /**
   * See http://build.fhir.org/resourcelist.html for complete list of resource types.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  resource?: Reference;

  /**
   * Constructor for TestScriptFixture
   */
  constructor(source: Partial<TestScriptFixture> = {}) {
    super(source);
  }
}
