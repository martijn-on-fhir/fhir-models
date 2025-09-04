import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * A property defines an additional slot through which additional information can be provided about a concept.
 */
export interface CodeSystemProperty extends BackboneElement {

  /**
   * A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters.
   */
  code: string;
  _code?: Element | undefined;
  /**
   * A description of the property- why it is defined, and how its value might be used.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * The type of the property value. Properties of type "code" contain a code defined by the code system (e.g. a reference to another defined concept).
   */
  type: ('code'|'Coding'|'string'|'integer'|'boolean'|'dateTime'|'decimal');
  _type?: Element | undefined;
  /**
   * Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system.
   */
  uri?: string | undefined;
  _uri?: Element | undefined;

}