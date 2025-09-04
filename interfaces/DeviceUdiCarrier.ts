import { BackboneElement } from './BackboneElement';
import { Element } from './Element';

/**
 * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
 */
export interface DeviceUdiCarrier extends BackboneElement {

  /**
   * The AIDC form of UDIs should be scanned or otherwise used for the identification of the device whenever possible to minimize errors in records resulting from manual transcriptions. If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
   */
  carrierAIDC?: string | undefined;
  _carrierAIDC?: Element | undefined;
  /**
   * If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
   */
  carrierHRF?: string | undefined;
  _carrierHRF?: Element | undefined;
  /**
   * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
   */
  deviceIdentifier?: string | undefined;
  _deviceIdentifier?: Element | undefined;
  /**
   * A coded entry to indicate how the data was entered.
   */
  entryType?: ('barcode'|'rfid'|'manual'|'card'|'self-reported'|'unknown') | undefined;
  _entryType?: Element | undefined;
  /**
   * Organization that is charged with issuing UDIs for devices.  For example, the US FDA issuers include :
   * 1) GS1:
   * http://hl7.org/fhir/NamingSystem/gs1-di,
   * 2) HIBCC:
   * http://hl7.org/fhir/NamingSystem/hibcc-dI,
   * 3) ICCBBA for blood containers:
   * http://hl7.org/fhir/NamingSystem/iccbba-blood-di,
   * 4) ICCBA for other devices:
   * http://hl7.org/fhir/NamingSystem/iccbba-other-di.
   */
  issuer?: string | undefined;
  _issuer?: Element | undefined;
  /**
   * The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
   */
  jurisdiction?: string | undefined;
  _jurisdiction?: Element | undefined;

}