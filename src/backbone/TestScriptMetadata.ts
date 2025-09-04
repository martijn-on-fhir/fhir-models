import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { TestScriptMetadataCapability } from './TestScriptMetadataCapability';
import { TestScriptMetadataLink } from './TestScriptMetadataLink';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestScriptMetadata extends BackboneElement implements fhir.TestScriptMetadata {
  /**
   * When the metadata capabilities section is defined at TestScript.metadata or at TestScript.setup.metadata, and the server
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestScriptMetadataCapability)
  capability?: TestScriptMetadataCapability[];

  /**
   * A link to the FHIR specification that this test is covering.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestScriptMetadataLink)
  link?: TestScriptMetadataLink[];

  /**
   * Constructor for TestScriptMetadata
   */
  constructor(source: Partial<TestScriptMetadata> = {}) {
    super(source);
  }
}
