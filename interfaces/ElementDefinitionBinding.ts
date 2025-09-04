import { Element } from './Element';

/**
 * For a CodeableConcept, when no codes are allowed - only text, use a binding of strength "required" with a description explaining that no coded values are allowed and what sort of information to put in the "text" element.
 */
export interface ElementDefinitionBinding extends Element {

  /**
   * Describes the intended use of this particular set of codes.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * For further discussion, see [Using Terminologies](terminologies.html).
   */
  strength: ('required'|'extensible'|'preferred'|'example');
  _strength?: Element | undefined;
  /**
   * The reference may be version-specific or not (e.g. have a |[version] at the end of the canonical URL).
   */
  valueSet?: string | undefined;
  _valueSet?: Element | undefined;

}