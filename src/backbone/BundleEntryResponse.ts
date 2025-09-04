import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { FhirResource } from '../elements/FhirResource';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class BundleEntryResponse extends BackboneElement implements fhir.BundleEntryResponse {
  /**
   * Etags match the Resource.meta.versionId. The ETag has to match the version id in the header if a resource is included.
   */
  @IsOptional()
  @IsString()
  etag?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _etag?: Element;

  /**
   * This has to match the same time in the meta header (meta.lastUpdated) if a resource is included.
   */
  @IsOptional()
  @IsString()
  lastModified?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _lastModified?: Element;

  /**
   * The location header created by processing this operation, populated if the operation returns a location.
   */
  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _location?: Element;

  /**
   * For a POST/PUT operation, this is the equivalent outcome that would be returned for prefer = operationoutcome - except t
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => FhirResource)
  outcome?: FhirResource;

  /**
   * The status code returned by processing this entry. The status SHALL start with a 3 digit HTTP code (e.g. 404) and may co
   */
  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _status?: Element;

  /**
   * Constructor for BundleEntryResponse
   */
  constructor(source: Partial<BundleEntryResponse> = {}) {
    super(source);
  }
}
