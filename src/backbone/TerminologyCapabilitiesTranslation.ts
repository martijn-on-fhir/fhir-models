import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TerminologyCapabilitiesTranslation extends BackboneElement {
  /**
   * Whether the client must identify the map.
   */
  @IsOptional()
  @IsBoolean()
  needsMap?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _needsMap?: Element;

  /**
   * Constructor for TerminologyCapabilitiesTranslation
   */
  constructor(source: Partial<TerminologyCapabilitiesTranslation> = {}) {
    super(source);
  }
}
