import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
 */
export interface DeviceDefinitionUdiDeviceIdentifier extends BackboneElement {

  /**
   * The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier.
   */
  deviceIdentifier: string;
  _deviceIdentifier?: Element | undefined;
  /**
   * The organization that assigns the identifier algorithm.
   */
  issuer: string;
  _issuer?: Element | undefined;
  /**
   * The jurisdiction to which the deviceIdentifier applies.
   */
  jurisdiction: string;
  _jurisdiction?: Element | undefined;

}