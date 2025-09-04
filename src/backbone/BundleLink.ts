import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class BundleLink extends BackboneElement implements fhir.BundleLink {
  /**
   * A name which details the functional use for this link - see [http://www.iana.org/assignments/link-relations/link-relatio
   */
  @IsOptional()
  @IsString()
  relation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _relation?: Element;

  /**
   * The reference details for the link.
   */
  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _url?: Element;

  /**
   * Constructor for BundleLink
   */
  constructor(source: Partial<BundleLink> = {}) {
    super(source);
  }
}
