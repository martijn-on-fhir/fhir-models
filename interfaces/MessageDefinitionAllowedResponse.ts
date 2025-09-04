import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * This indicates an application level response to "close" a transaction implicit in a particular request message.  To define a complete workflow scenario, look to the [[PlanDefinition]] resource which allows the definition of complex orchestrations, conditionality, etc.
 */
export interface MessageDefinitionAllowedResponse extends BackboneElement {

  /**
   * A reference to the message definition that must be adhered to by this supported response.
   */
  message: string;
  _message?: Element | undefined;
  /**
   * Provides a description of the circumstances in which this response should be used (as opposed to one of the alternative responses).
   */
  situation?: string | undefined;
  _situation?: Element | undefined;

}