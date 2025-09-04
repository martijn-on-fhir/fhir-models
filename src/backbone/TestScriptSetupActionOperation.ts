import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Coding } from '../elements/Coding';
import { TestScriptSetupActionOperationRequestHeader } from './TestScriptSetupActionOperationRequestHeader';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class TestScriptSetupActionOperation extends BackboneElement {
  /**
   * If this is specified, then test engine shall set the 'Accept' header to the corresponding value.  If you'd like to expli
   */
  @IsOptional()
  @IsString()
  accept?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _accept?: Element;

  /**
   * If this is specified, then test engine shall set the 'Content-Type' header to the corresponding value.  If you'd like to
   */
  @IsOptional()
  @IsString()
  contentType?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _contentType?: Element;

  /**
   * This has no impact on the verification itself.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * If multiple TestScript.destination elements are defined and operation.destination is undefined, test engine will report 
   */
  @IsOptional()
  @IsNumber()
  destination?: number;

  /**
   * Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful c
   */
  @IsOptional()
  @IsBoolean()
  encodeRequestUrl?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _encodeRequestUrl?: Element;

  /**
   * This has no impact on the verification itself.
   */
  @IsOptional()
  @IsString()
  label?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _label?: Element;

  /**
   * The primary purpose of the explicit HTTP method is support of  HTTP POST method invocation of the FHIR search. Other use
   */
  @IsOptional()
  @IsIn(['delete', 'get', 'options', 'patch', 'post', 'put', 'head'])
  method?: ('delete'|'get'|'options'|'patch'|'post'|'put'|'head');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _method?: Element;

  /**
   * If absent, test engine will send the message.  When present, test engine will not send the request message but will wait
   */
  @IsOptional()
  @IsNumber()
  origin?: number;

  /**
   * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will 
   */
  @IsOptional()
  @IsString()
  params?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _params?: Element;

  /**
   * This gives control to test-script writers to set headers explicitly based on test requirements.  It will allow for testi
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TestScriptSetupActionOperationRequestHeader)
  requestHeader?: TestScriptSetupActionOperationRequestHeader[];

  /**
   * If a requestId is supplied, then the resulting request (both headers and body) is mapped to the fixture ID (which may be
   */
  @IsOptional()
  @IsString()
  requestId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _requestId?: Element;

  /**
   * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will 
   */
  @IsOptional()
  @IsString()
  resource?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _resource?: Element;

  /**
   * If a responseId is supplied, and the server responds, then the resulting response (both headers and body) is mapped to t
   */
  @IsOptional()
  @IsString()
  responseId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _responseId?: Element;

  /**
   * The id of the fixture used as the body of a PUT or POST request.
   */
  @IsOptional()
  @IsString()
  sourceId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _sourceId?: Element;

  /**
   * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will 
   */
  @IsOptional()
  @IsString()
  targetId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _targetId?: Element;

  /**
   * See http://build.fhir.org/http.html for list of server interactions.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Coding)
  type?: Coding;

  /**
   * Used to set the request URL explicitly.  If "url" element is defined, then "targetId", "resource", and "params" elements
   */
  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _url?: Element;

  /**
   * Constructor for TestScriptSetupActionOperation
   */
  constructor(source: Partial<TestScriptSetupActionOperation> = {}) {
    super(source);
  }
}
