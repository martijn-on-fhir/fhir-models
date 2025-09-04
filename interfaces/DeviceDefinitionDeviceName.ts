import { BackboneElement } from './BackboneElement';
import { Element } from './Element';
import { ManufactureDeviceName } from './ManufactureDeviceName';
import { ModelName } from './ModelName';
import { PatientReportedName } from './PatientReportedName';
import { UserFriendlyName } from './UserFriendlyName';

/**
 * A name given to the device to identify it.
 */
export interface DeviceDefinitionDeviceName extends BackboneElement {

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