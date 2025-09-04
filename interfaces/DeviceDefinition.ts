import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { ContactPoint } from './ContactPoint';
import { DeviceDefinitionCapability } from './DeviceDefinitionCapability';
import { DeviceDefinitionDeviceName } from './DeviceDefinitionDeviceName';
import { DeviceDefinitionMaterial } from './DeviceDefinitionMaterial';
import { DeviceDefinitionProperty } from './DeviceDefinitionProperty';
import { DeviceDefinitionSpecialization } from './DeviceDefinitionSpecialization';
import { DeviceDefinitionUdiDeviceIdentifier } from './DeviceDefinitionUdiDeviceIdentifier';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { ProdCharacteristic } from './ProdCharacteristic';
import { ProductShelfLife } from './ProductShelfLife';
import { Quantity } from './Quantity';
import { Reference } from './Reference';

/**
 * The characteristics, operational status and capabilities of a medical-related component of a medical device.
 */
export interface DeviceDefinition extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'DeviceDefinition';
  /**
   * Device capabilities.
   */
  capability?: DeviceDefinitionCapability[] | undefined;
  /**
   * used for troubleshooting etc.
   */
  contact?: ContactPoint[] | undefined;
  /**
   * A name given to the device to identify it.
   */
  deviceName?: DeviceDefinitionDeviceName[] | undefined;
  /**
   * Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For example: handle ID.
   */
  identifier?: Identifier[] | undefined;
  /**
   * Language code for the human-readable text strings produced by the device (all supported).
   */
  languageCode?: CodeableConcept[] | undefined;
  /**
   * A name of the manufacturer.
   */
  manufacturerString?: string | undefined;
  _manufacturerString?: Element | undefined;
  /**
   * A name of the manufacturer.
   */
  manufacturerReference?: Reference | undefined;
  /**
   * A substance used to create the material(s) of which the device is made.
   */
  material?: DeviceDefinitionMaterial[] | undefined;
  /**
   * The model number for the device.
   */
  modelNumber?: string | undefined;
  _modelNumber?: Element | undefined;
  /**
   * Descriptive information, usage information or implantation information that is not captured in an existing element.
   */
  note?: Annotation[] | undefined;
  /**
   * Access to on-line information about the device.
   */
  onlineInformation?: string | undefined;
  _onlineInformation?: Element | undefined;
  /**
   * An organization that is responsible for the provision and ongoing maintenance of the device.
   */
  owner?: Reference | undefined;
  /**
   * The parent device it can be part of.
   */
  parentDevice?: Reference | undefined;
  /**
   * Dimensions, color etc.
   */
  physicalCharacteristics?: ProdCharacteristic | undefined;
  /**
   * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
   */
  property?: DeviceDefinitionProperty[] | undefined;
  /**
   * The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product).
   */
  quantity?: Quantity | undefined;
  /**
   * Safety characteristics of the device.
   */
  safety?: CodeableConcept[] | undefined;
  /**
   * Shelf Life and storage information.
   */
  shelfLifeStorage?: ProductShelfLife[] | undefined;
  /**
   * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
   */
  specialization?: DeviceDefinitionSpecialization[] | undefined;
  /**
   * What kind of device or device system this is.
   */
  type?: CodeableConcept | undefined;
  /**
   * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
   */
  udiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifier[] | undefined;
  /**
   * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
   */
  url?: string | undefined;
  _url?: Element | undefined;
  /**
   * The available versions of the device, e.g., software versions.
   */
  version?: string[] | undefined;
  _version?: Element[] | undefined;

}