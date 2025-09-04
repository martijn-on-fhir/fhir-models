import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';

/**
 * A substance used to create the material(s) of which the device is made.
 */
export interface DeviceDefinitionMaterial extends BackboneElement {

  /**
   * Whether the substance is a known or suspected allergen.
   */
  allergenicIndicator?: boolean | undefined;
  _allergenicIndicator?: Element | undefined;
  /**
   * Indicates an alternative material of the device.
   */
  alternate?: boolean | undefined;
  _alternate?: Element | undefined;
  /**
   * The substance.
   */
  substance: CodeableConcept;

}