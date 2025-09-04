import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class BundleEntryRequest extends BackboneElement {
  /**
   * Only perform the operation if the Etag value matches. For more information, see the API section ["Managing Resource Cont
   */
  @IsOptional()
  @IsString()
  ifMatch?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _ifMatch?: Element;

  /**
   * Only perform the operation if the last updated date matches. See the API documentation for ["Conditional Read"](http.htm
   */
  @IsOptional()
  @IsString()
  ifModifiedSince?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _ifModifiedSince?: Element;

  /**
   * Instruct the server not to perform the create if a specified resource already exists. For further information, see the A
   */
  @IsOptional()
  @IsString()
  ifNoneExist?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _ifNoneExist?: Element;

  /**
   * If the ETag values match, return a 304 Not Modified status. See the API documentation for ["Conditional Read"](http.html
   */
  @IsOptional()
  @IsString()
  ifNoneMatch?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _ifNoneMatch?: Element;

  /**
   * In a transaction or batch, this is the HTTP action to be executed for this entry. In a history bundle, this indicates th
   */
  @IsOptional()
  @IsIn(['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH'])
  method?: ('GET'|'HEAD'|'POST'|'PUT'|'DELETE'|'PATCH');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _method?: Element;

  /**
   * E.g. for a Patient Create, the method would be "POST" and the URL would be "Patient". For a Patient Update, the method w
   */
  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _url?: Element;

  /**
   * Constructor for BundleEntryRequest
   */
  constructor(source: Partial<BundleEntryRequest> = {}) {
    super(source);
  }
}
