import { Element } from './Element';

/**
 * A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.
 */
export interface Expression extends Element {

  /**
   * A brief, natural language description of the condition that effectively communicates the intended semantics.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * An expression in the specified language that returns a value.
   */
  expression?: string | undefined;
  _expression?: Element | undefined;
  /**
   * The media type of the language for the expression.
   */
  language: string;
  _language?: Element | undefined;
  /**
   * A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined.
   */
  name?: string | undefined;
  _name?: Element | undefined;
  /**
   * If both a reference and an expression is found, the reference SHALL point to the same expression.
   */
  reference?: string | undefined;
  _reference?: Element | undefined;

}