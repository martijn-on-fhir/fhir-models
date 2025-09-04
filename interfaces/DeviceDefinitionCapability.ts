import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';

/**
 * Device capabilities.
 */
export interface DeviceDefinitionCapability extends BackboneElement {

  /**
   * Description of capability.
   */
  description?: CodeableConcept[] | undefined;
  /**
   * Type of capability.
   */
  type: CodeableConcept;

}