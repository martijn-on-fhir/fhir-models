import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { TerminologyCapabilitiesCodeSystemVersion } from './TerminologyCapabilitiesCodeSystemVersion';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TerminologyCapabilitiesCodeSystem extends BackboneElement {
  /**
   * True if subsumption is supported for this version of the code system.
   */
  @IsOptional()
  @IsBoolean()
  subsumption?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _subsumption?: Element;

  /**
   * URI for the Code System.
   */
  @IsOptional()
  @IsString()
  uri?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _uri?: Element;

  /**
   * Language translations might not be available for all codes.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TerminologyCapabilitiesCodeSystemVersion)
  version?: TerminologyCapabilitiesCodeSystemVersion[];

  /**
   * Constructor for TerminologyCapabilitiesCodeSystem
   */
  constructor(source: Partial<TerminologyCapabilitiesCodeSystem> = {}) {
    super(source);
  }
}
