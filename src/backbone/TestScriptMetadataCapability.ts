import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestScriptMetadataCapability extends BackboneElement {
  /**
   * The conformance statement of the server has to contain at a minimum the contents of the reference pointed to by this ele
   */
  @IsOptional()
  @IsString()
  capabilities?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _capabilities?: Element;

  /**
   * Description of the capabilities that this test script is requiring the server to support.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Which server these requirements apply to.
   */
  @IsOptional()
  @IsNumber()
  destination?: number;

  /**
   * Links to the FHIR specification that describes this interaction and the resources involved in more detail.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  link?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _link?: Element[];

  /**
   * Which origin server these requirements apply to.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  origin?: number[];

  /**
   * Whether or not the test execution will require the given capabilities of the server in order for this test script to exe
   */
  @IsOptional()
  @IsBoolean()
  required?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _required?: Element;

  /**
   * Whether or not the test execution will validate the given capabilities of the server in order for this test script to ex
   */
  @IsOptional()
  @IsBoolean()
  validated?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _validated?: Element;

  /**
   * Constructor for TestScriptMetadataCapability
   */
  constructor(source: Partial<TestScriptMetadataCapability> = {}) {
    super(source);
  }
}
