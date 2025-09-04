import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * In order to evaluate an assertion, the request, response, and results of the most recently executed operation must always be maintained by the test engine.
 */
export interface TestScriptSetupActionAssert extends BackboneElement {

  /**
   * Thefhirpath expression to be evaluated against the expected fixture to compare to. Ignored if "assert.value" is used. The evaluation will be done before the assertion is evaluated.
   */
  compareToSourceExpression?: string | undefined;
  _compareToSourceExpression?: Element | undefined;
  /**
   * Id of the source fixture used as the contents to be evaluated by either the "source/expression" or "sourceId/path" definition.
   */
  compareToSourceId?: string | undefined;
  _compareToSourceId?: Element | undefined;
  /**
   * The XPath or JSONPath expression to be evaluated against the expected fixture to compare to. Ignored if "assert.value" is used. The evaluation will be done before the assertion is evaluated.
   */
  compareToSourcePath?: string | undefined;
  _compareToSourcePath?: Element | undefined;
  /**
   * If this is specified, then test engine shall confirm that the content-type of the last operation's headers is set to this value.  If "assert.sourceId" element is specified, then the evaluation will be done against the headers mapped to that sourceId (and not the last operation's headers).  If you'd like to have more control over the string, then use 'assert.headerField' instead.
   */
  contentType?: string | undefined;
  _contentType?: Element | undefined;
  /**
   * This has no impact on the verification itself.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * If the direction is specified as "response" (the default), then the processing of this assert is against the received response message. If the direction is specified as "request", then the processing of this assert is against the sent request message.
   */
  direction?: ('response'|'request') | undefined;
  _direction?: Element | undefined;
  /**
   * If both "expression" and a "fixtureId" are specified, then the expression will be evaluated against the request or response body mapped to the fixtureId.  If "expression" is specified and a "fixtureId" is not, then the expression will be evaluated against the response body of the last operation.  Test engines are to store the request and response body and headers of the last operation at all times for subsequent assertions.
   */
  expression?: string | undefined;
  _expression?: Element | undefined;
  /**
   * If "headerField" is specified then "value" must be specified.  If "sourceId" is not specified, then "headerField" will be evaluated against the last operation's response headers.  Test engines are to keep track of the last operation's response body and response headers.
   */
  headerField?: string | undefined;
  _headerField?: Element | undefined;
  /**
   * This has no impact on the verification itself.
   */
  label?: string | undefined;
  _label?: Element | undefined;
  /**
   * Asserts that the response contains all the element/content in another fixture pointed to by minimumId.  This can be a statically defined fixture or one that is dynamically set via responseId.
   */
  minimumId?: string | undefined;
  _minimumId?: Element | undefined;
  /**
   * Asserts that the Bundle contains first, last, and next links.
   */
  navigationLinks?: boolean | undefined;
  _navigationLinks?: Element | undefined;
  /**
   * Operators are useful especially for negative testing.  If operator is not specified, then the "equals" operator is assumed; e.g. ```<code>   <assert>  <operator value="in" />  <responseCode value="200,201,204" />    </assert>    <assert>  <operator value="notEquals" />  <response value="okay"/>   </assert>    <assert>  <operator value="greaterThan" />    <responseHeader>     <field value="Content-Length" />     <value value="0" />    </responseHeader/>   </assert> </code> ```.
   */
  operator?: ('equals'|'notEquals'|'in'|'notIn'|'greaterThan'|'lessThan'|'empty'|'notEmpty'|'contains'|'notContains'|'eval') | undefined;
  _operator?: Element | undefined;
  /**
   * If both "path" and a "fixtureId" are specified, then the path will be evaluated against the request or response body mapped to the fixtureId.  If "path" is specified and a "fixtureId" is not, then the path will be evaluated against the response body of the last operation.  Test engines are to store the request and response body and headers of the last operation at all times for subsequent assertions.
   */
  path?: string | undefined;
  _path?: Element | undefined;
  /**
   * If "requestMethod" is specified then it will be used in place of "value". The "requestMethod" will evaluate against the last operation's request HTTP operation.
   */
  requestMethod?: ('delete'|'get'|'options'|'patch'|'post'|'put'|'head') | undefined;
  _requestMethod?: Element | undefined;
  /**
   * If "requestURL" is specified then it will be used in place of "value". The "requestURL" will evaluate against the last operation's full request URL path string.
   */
  requestURL?: string | undefined;
  _requestURL?: Element | undefined;
  /**
   * This will be expected resource type in response body e.g. in read, vread, search, etc.  See http://build.fhir.org/resourcelist.html for complete list of resource types; e.g. <assert > <resourceType value="Patient" </assert>.
   */
  resource?: string | undefined;
  _resource?: Element | undefined;
  /**
   * This is a shorter way of achieving similar verifications via "assert.responseCode".  If you need more control, then use "assert.responseCode"  e.g. <assert>  <contentType value="json" />  <response value="okay"/> </assert>.
   */
  response?: ('okay'|'created'|'noContent'|'notModified'|'bad'|'forbidden'|'notFound'|'methodNotAllowed'|'conflict'|'gone'|'preconditionFailed'|'unprocessable') | undefined;
  _response?: Element | undefined;
  /**
   * To be used with "operator" attribute value. Asserts that the response code equals this value if "operator" is not specified.   If the operator is "in" or "notIn" then the responseCode would be a comma-separated list of values e.g. "200,201". Otherwise, it's expected to be a numeric value.   If "fixture" is not specified, then the "responseBodyId" value of the last operation is assumed.
   */
  responseCode?: string | undefined;
  _responseCode?: Element | undefined;
  /**
   * This can be a statically defined fixture (at the top of the testscript) or a dynamically set fixture created by responseId of the action.operation element.
   */
  sourceId?: string | undefined;
  _sourceId?: Element | undefined;
  /**
   * The ID of a Profile fixture. Asserts that the response is valid according to the Profile specified by validateProfileId.
   */
  validateProfileId?: string | undefined;
  _validateProfileId?: Element | undefined;
  /**
   * The string-representation of a number, string, or boolean that is expected.  Test engines do have to look for placeholders (${}) and replace the variable placeholders with the variable values at runtime before comparing this value to the actual value.
   */
  value?: string | undefined;
  _value?: Element | undefined;
  /**
   * If this element is specified and it is true, then assertion failures can be logged by test engine but should not stop the test script execution from proceeding.  There are likely cases where the spec is not clear on what should happen. If the spec says something is optional (maybe a response header for example), but a server doesn’t do it, we could choose to issue a warning.
   */
  warningOnly: boolean;
  _warningOnly?: Element | undefined;

}