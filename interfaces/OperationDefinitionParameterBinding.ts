import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
 */
export interface OperationDefinitionParameterBinding extends BackboneElement {

  /**
   * For further discussion, see [Using Terminologies](terminologies.html).
   */
  strength: ('required'|'extensible'|'preferred'|'example');
  _strength?: Element | undefined;
  /**
   * For value sets with a referenceResource, the display can contain the value set description.  The reference may be version-specific or not.
   */
  valueSet: string;
  _valueSet?: Element | undefined;

}