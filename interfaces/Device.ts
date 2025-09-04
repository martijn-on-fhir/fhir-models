import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { ContactPoint } from './ContactPoint';
import { DeviceDeviceName } from './DeviceDeviceName';
import { DeviceProperty } from './DeviceProperty';
import { DeviceSpecialization } from './DeviceSpecialization';
import { DeviceUdiCarrier } from './DeviceUdiCarrier';
import { DeviceVersion } from './DeviceVersion';
import { DomainResource } from './DomainResource';
import { Element } from './Element';
import { Identifier } from './Identifier';
import { Reference } from './Reference';

/**
 * A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.
 */
export interface Device extends DomainResource {

  /** Resource Type Name (for serialization) */
  readonly resourceType: 'Device';
  /**
   * used for troubleshooting etc.
   */
  contact?: ContactPoint[] | undefined;
  /**
   * The reference to the definition for the device.
   */
  definition?: Reference | undefined;
  /**
   * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
   */
  deviceName?: DeviceDeviceName[] | undefined;
  /**
   * For example, this applies to devices in the United States regulated under *Code of Federal Regulation 21CFR§1271.290(c)*.
   */
  distinctIdentifier?: string | undefined;
  _distinctIdentifier?: Element | undefined;
  /**
   * The date and time beyond which this device is no longer valid or should not be used (if applicable).
   */
  expirationDate?: string | undefined;
  _expirationDate?: Element | undefined;
  /**
   * The barcode string from a barcode present on a device label or package may identify the instance, include names given to the device in local usage, or may identify the type of device. If the identifier identifies the type of device, Device.type element should be used.
   */
  identifier?: Identifier[] | undefined;
  /**
   * The place where the device can be found.
   */
  location?: Reference | undefined;
  /**
   * Lot number assigned by the manufacturer.
   */
  lotNumber?: string | undefined;
  _lotNumber?: Element | undefined;
  /**
   * The date and time when the device was manufactured.
   */
  manufactureDate?: string | undefined;
  _manufactureDate?: Element | undefined;
  /**
   * A name of the manufacturer.
   */
  manufacturer?: string | undefined;
  _manufacturer?: Element | undefined;
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
   * An organization that is responsible for the provision and ongoing maintenance of the device.
   */
  owner?: Reference | undefined;
  /**
   * The parent device.
   */
  parent?: Reference | undefined;
  /**
   * Alphanumeric Maximum 20.
   */
  partNumber?: string | undefined;
  _partNumber?: Element | undefined;
  /**
   * Patient information, If the device is affixed to a person.
   */
  patient?: Reference | undefined;
  /**
   * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
   */
  property?: DeviceProperty[] | undefined;
  /**
   * Provides additional safety characteristics about a medical device.  For example devices containing latex.
   */
  safety?: CodeableConcept[] | undefined;
  /**
   * Alphanumeric Maximum 20.
   */
  serialNumber?: string | undefined;
  _serialNumber?: Element | undefined;
  /**
   * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
   */
  specialization?: DeviceSpecialization[] | undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the device (record)as not currently valid.
   */
  status?: ('active'|'inactive'|'entered-in-error'|'unknown') | undefined;
  _status?: Element | undefined;
  /**
   * Reason for the dtatus of the Device availability.
   */
  statusReason?: CodeableConcept[] | undefined;
  /**
   * The kind or type of device.
   */
  type?: CodeableConcept | undefined;
  /**
   * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
   */
  udiCarrier?: DeviceUdiCarrier[] | undefined;
  /**
   * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
   */
  url?: string | undefined;
  _url?: Element | undefined;
  /**
   * The actual design of the device or software version running on the device.
   */
  version?: DeviceVersion[] | undefined;

}