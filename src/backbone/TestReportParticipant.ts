import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestReportParticipant extends BackboneElement implements fhir.TestReportParticipant {
  /**
   * The display name of the participant.
   */
  @IsOptional()
  @IsString()
  display?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _display?: Element;

  /**
   * The type of participant.
   */
  @IsOptional()
  @IsIn(['test-engine', 'client', 'server'])
  type?: ('test-engine'|'client'|'server');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * The uri of the participant. An absolute URL is preferred.
   */
  @IsOptional()
  @IsString()
  uri?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _uri?: Element;

  /**
   * Constructor for TestReportParticipant
   */
  constructor(source: Partial<TestReportParticipant> = {}) {
    super(source);
  }
}
