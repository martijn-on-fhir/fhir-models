import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Variables would be set based either on XPath/JSONPath expressions against fixtures (static and response), or headerField evaluations against response headers. If variable evaluates to nodelist or anything other than a primitive value, then test engine would report an error.  Variables would be used to perform clean replacements in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations. This limits the places that test engines would need to look for placeholders "${}".  Variables are scoped to the whole script. They are NOT evaluated at declaration. They are evaluated by test engine when used for substitutions in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations.  See example testscript-search.xml.
 */
export interface TestScriptVariable extends BackboneElement {
}".  Variables are scoped to the whole script. They are NOT evaluated at declaration. They are evaluated by test engine when used for substitutions in "operation.params", "operation.requestHeader.value", and "operation.url" element values during operation calls and in "assert.value" during assertion evaluations.  See example testscript-search.xml.
 */
export interface TestScriptVariable extends BackboneElement {
  /**
   * The purpose of this element is to allow for a pre-defined value that can be used as a default or as an override value. Test engines can optionally use this as a placeholder for user-defined execution time values.
   */
  defaultValue?: string | undefined;
  _defaultValue?: Element | undefined;
  /**
   * A free text natural language description of the variable and its purpose.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If expression or path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define any combination of expression, headerField and path.
   */
  expression?: string | undefined;
  _expression?: Element | undefined;
  /**
   * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define both headerField and path.
   */
  headerField?: string | undefined;
  _headerField?: Element | undefined;
  /**
   * Displayable text string with hint help information to the user when entering a default value.
   */
  hint?: string | undefined;
  _hint?: Element | undefined;
  /**
   * Placeholders would contain the variable name wrapped in ${} in "operation.params", "operation.requestHeader.value", and "operation.url" elements.  These placeholders would need to be replaced by the variable value before the operation is executed.
   */
  name: string;
  _name?: Element | undefined;
  /**
   * If headerField is defined, then the variable will be evaluated against the headers that sourceId is pointing to.  If expression or path is defined, then the variable will be evaluated against the fixture body that sourceId is pointing to.  It is an error to define any combination of expression, headerField and path.
   */
  path?: string | undefined;
  _path?: Element | undefined;
  /**
   * This can be a statically defined fixture (at the top of the TestScript) or a dynamically set fixture created by responseId of the `action.operation` element.
   */
  sourceId?: string | undefined;
  _sourceId?: Element | undefined;

}