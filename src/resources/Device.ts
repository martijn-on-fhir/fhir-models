import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactPoint } from '../elements/ContactPoint';
import { DeviceDeviceName } from '../backbone/DeviceDeviceName';
import { DeviceProperty } from '../backbone/DeviceProperty';
import { DeviceSpecialization } from '../backbone/DeviceSpecialization';
import { DeviceUdiCarrier } from '../backbone/DeviceUdiCarrier';
import { DeviceVersion } from '../backbone/DeviceVersion';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Device extends DomainResource implements fhir.Device {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Device' as const;

  /**
   * used for troubleshooting etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  contact?: ContactPoint[];

  /**
   * The reference to the definition for the device.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  definition?: Reference;

  /**
   * This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person descri
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceDeviceName)
  deviceName?: DeviceDeviceName[];

  /**
   * For example, this applies to devices in the United States regulated under *Code of Federal Regulation 21CFR§1271.290(c)*
   */
  @IsOptional()
  @IsString()
  distinctIdentifier?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _distinctIdentifier?: Element;

  /**
   * The date and time beyond which this device is no longer valid or should not be used (if applicable).
   */
  @IsOptional()
  @IsString()
  expirationDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _expirationDate?: Element;

  /**
   * The barcode string from a barcode present on a device label or package may identify the instance, include names given to
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The place where the device can be found.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  location?: Reference;

  /**
   * Lot number assigned by the manufacturer.
   */
  @IsOptional()
  @IsString()
  lotNumber?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _lotNumber?: Element;

  /**
   * The date and time when the device was manufactured.
   */
  @IsOptional()
  @IsString()
  manufactureDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _manufactureDate?: Element;

  /**
   * A name of the manufacturer.
   */
  @IsOptional()
  @IsString()
  manufacturer?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _manufacturer?: Element;

  /**
   * The model number for the device.
   */
  @IsOptional()
  @IsString()
  modelNumber?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _modelNumber?: Element;

  /**
   * Descriptive information, usage information or implantation information that is not captured in an existing element.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Annotation)
  note?: Annotation[];

  /**
   * An organization that is responsible for the provision and ongoing maintenance of the device.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  owner?: Reference;

  /**
   * The parent device.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  parent?: Reference;

  /**
   * Alphanumeric Maximum 20.
   */
  @IsOptional()
  @IsString()
  partNumber?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _partNumber?: Element;

  /**
   * Patient information, If the device is affixed to a person.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /**
   * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceProperty)
  property?: DeviceProperty[];

  /**
   * Provides additional safety characteristics about a medical device.  For example devices containing latex.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  safety?: CodeableConcept[];

  /**
   * Constructor for Device
   */
  constructor(source: Partial<Device> = {}) {
    super(source);
    this.resourceType = 'Device';
  }
}
