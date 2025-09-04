import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import { Coding } from './Coding';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address form
 */
export class Meta extends Element implements fhir.Meta {
  /**
   * This value is always populated except when the resource is first being created. The server / resource manager sets this value; what a client provides is irrelevant. This is equivalent to the HTTP Last
   */
  @IsOptional()
  @IsString()
  lastUpdated?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _lastUpdated?: Element;

  /**
   * It is up to the server and/or other infrastructure of policy to determine whether/how these claims are verified and/or updated over time.  The list of profile URLs is a set.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  profile?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _profile?: Element[];

  /**
   * The security labels can be updated without changing the stated version of the resource. The list of security labels is a set. Uniqueness is based the system/code, and version and display are ignored.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  security?: Coding[];

  /**
   * In the provenance resource, this corresponds to Provenance.entity.what[x]. The exact use of the source (and the implied Provenance.entity.role) is left to implementer discretion. Only one nominated so
   */
  @IsOptional()
  @IsString()
  source?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _source?: Element;

  /**
   * The tags can be updated without changing the stated version of the resource. The list of tags is a set. Uniqueness is based the system/code, and version and display are ignored.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Coding)
  tag?: Coding[];

  /**
   * The server assigns this value, and ignores what the client specifies, except in the case that the server is imposing version integrity on updates/deletes.
   */
  @IsOptional()
  @IsString()
  versionId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _versionId?: Element;

  /**
   * Constructor for Meta
   */
  constructor(source: Partial<Meta> = {}) {
    super(source);
  }
}
