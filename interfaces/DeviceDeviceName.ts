import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { ManufactureDeviceName } from './ManufactureDeviceName';
import { ModelName } from './ModelName';
import { PatientReportedName } from './PatientReportedName';
import { UserFriendlyName } from './UserFriendlyName';

/**
 * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition.
 */
export interface DeviceDeviceName extends BackboneElement {

  /**
   * The name of the device.
   */
  name: string;
  _name?: Element | undefined;
  /**
   * The type of deviceName.
   * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
   */
  type: ('udi-label-name'|'user-friendly-name'|'patient-reported-name'|'manufacturer-name'|'model-name'|'other');
  _type?: Element | undefined;

}