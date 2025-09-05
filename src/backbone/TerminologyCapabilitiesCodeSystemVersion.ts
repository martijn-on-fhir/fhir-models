import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { TerminologyCapabilitiesCodeSystemVersionFilter } from './TerminologyCapabilitiesCodeSystemVersionFilter';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TerminologyCapabilitiesCodeSystemVersion extends BackboneElement {
  /**
   * For version-less code systems, there should be a single version with no identifier.
   */
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _code?: Element;

  /**
   * If the compositional grammar defined by the code system is supported.
   */
  @IsOptional()
  @IsBoolean()
  compositional?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _compositional?: Element;

  /**
   * Filter Properties supported.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TerminologyCapabilitiesCodeSystemVersionFilter)
  filter?: TerminologyCapabilitiesCodeSystemVersionFilter[];

  /**
   * If this is the default version for this code system.
   */
  @IsOptional()
  @IsBoolean()
  isDefault?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _isDefault?: Element;

  /**
   * Language Displays supported.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  language?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _language?: Element[];

  /**
   * Properties supported for $lookup.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  property?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _property?: Element[];

  /**
   * Constructor for TerminologyCapabilitiesCodeSystemVersion
   */
  constructor(source: Partial<TerminologyCapabilitiesCodeSystemVersion> = {}) {
    super(source);
  }
}
