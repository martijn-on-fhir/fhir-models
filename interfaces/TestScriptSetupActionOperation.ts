import { BackboneElement } from './BackboneElement';
import { Coding } from './Coding';
import { Element } from './Element';
import { GET } from './GET';
import { TestScriptSetupActionOperationRequestHeader } from './TestScriptSetupActionOperationRequestHeader';

/**
 * The operation to perform.
 */
export interface TestScriptSetupActionOperation extends BackboneElement {

  /**
   * If this is specified, then test engine shall set the 'Accept' header to the corresponding value.  If you'd like to explicitly set the 'Accept' to some other value then use the 'requestHeader' element.
   */
  accept?: string | undefined;
  _accept?: Element | undefined;
  /**
   * If this is specified, then test engine shall set the 'Content-Type' header to the corresponding value.  If you'd like to explicitly set the 'Content-Type' to some other value then use the 'requestHeader' element.
   */
  contentType?: string | undefined;
  _contentType?: Element | undefined;
  /**
   * This has no impact on the verification itself.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * If multiple TestScript.destination elements are defined and operation.destination is undefined, test engine will report an error as it cannot determine what destination to use for the exchange.
   */
  destination?: number | undefined;
  /**
   * Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths.
   */
  encodeRequestUrl: boolean;
  _encodeRequestUrl?: Element | undefined;
  /**
   * This has no impact on the verification itself.
   */
  label?: string | undefined;
  _label?: Element | undefined;
  /**
   * The primary purpose of the explicit HTTP method is support of  HTTP POST method invocation of the FHIR search. Other uses will include support of negative testing.
   */
  method?: ('delete'|'get'|'options'|'patch'|'post'|'put'|'head') | undefined;
  _method?: Element | undefined;
  /**
   * If absent, test engine will send the message.  When present, test engine will not send the request message but will wait for the request message to be sent from this origin server.
   */
  origin?: number | undefined;
  /**
   * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored.  For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present.  For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url.  For "vread" and "history" operations, the versionId value will also be used.   Test engines would append whatever is specified for "params" to the URL after the resource type without tampering with the string (beyond encoding the URL for HTTP).  The "params" element does not correspond exactly to "search parameters".  Nor is it the "path".  It corresponds to the part of the URL that comes after the [type] (when "resource" element is specified); e.g. It corresponds to "/[id]/_history/[vid] {?_format=[mime-type]}" in the following operation: GET [base]/[type]/[id]/_history/[vid] {?_format=[mime-type]}  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before sending the request.
   */
  params?: string | undefined;
  _params?: Element | undefined;
  /**
   * This gives control to test-script writers to set headers explicitly based on test requirements.  It will allow for testing using:  - "If-Modified-Since" and "If-None-Match" headers.  See http://build.fhir.org/http.html#2.1.0.5.1 - "If-Match" header.  See http://build.fhir.org/http.html#2.1.0.11 - Conditional Create using "If-None-Exist".  See http://build.fhir.org/http.html#2.1.0.13.1 - Invalid "Content-Type" header for negative testing. - etc.
   */
  requestHeader?: TestScriptSetupActionOperationRequestHeader[] | undefined;
  /**
   * If a requestId is supplied, then the resulting request (both headers and body) is mapped to the fixture ID (which may be entirely new and previously undeclared) designated by "requestId".  If requestId is not specified, it is the test engine's responsibility to store the request and use it as the requestId in subsequent assertions when assertion path and/or headerField is specified, direction is equal to request, and the requestId in not specified.
   */
  requestId?: string | undefined;
  _requestId?: Element | undefined;
  /**
   * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored. For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present. For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url. For "vread" and "history" operations, the versionId value will also be used.
   */
  resource?: string | undefined;
  _resource?: Element | undefined;
  /**
   * If a responseId is supplied, and the server responds, then the resulting response (both headers and body) is mapped to the fixture ID (which may be entirely new and previously undeclared) designated by "responseId".  If responseId is not specified, it is the test engine's responsibility to store the response and use it as the responseId in subsequent assertions when assertion path and/or headerField is specified and the responseId is not specified.
   */
  responseId?: string | undefined;
  _responseId?: Element | undefined;
  /**
   * The id of the fixture used as the body of a PUT or POST request.
   */
  sourceId?: string | undefined;
  _sourceId?: Element | undefined;
  /**
   * If "url" element is specified, then "targetId", "params", and "resource" elements will be ignored as "url" element will have everything needed for constructing the request url.  If "params" element is specified, then "targetId" element is ignored.  For FHIR operations that require a resource (e.g. "read" and "vread" operations), the "resource" element must be specified when "params" element is specified.  If "url" and "params" elements are absent, then the request url will be constructed from "targetId" fixture if present.  For "read" operation, the resource and id values will be extracted from "targetId" fixture and used to construct the url.  For "vread" and "history" operations, the versionId value will also be used.
   */
  targetId?: string | undefined;
  _targetId?: Element | undefined;
  /**
   * See http://build.fhir.org/http.html for list of server interactions.
   */
  type?: Coding | undefined;
  /**
   * Used to set the request URL explicitly.  If "url" element is defined, then "targetId", "resource", and "params" elements will be ignored.  Test engines would use whatever is specified in "url" without tampering with the string (beyond encoding the URL for HTTP).  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before sending the request.
   */
  url?: string | undefined;
  _url?: Element | undefined;

}