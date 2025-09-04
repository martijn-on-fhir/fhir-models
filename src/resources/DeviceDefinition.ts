import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Annotation } from '../elements/Annotation';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactPoint } from '../elements/ContactPoint';
import { DeviceDefinitionCapability } from '../backbone/DeviceDefinitionCapability';
import { DeviceDefinitionDeviceName } from '../backbone/DeviceDefinitionDeviceName';
import { DeviceDefinitionMaterial } from '../backbone/DeviceDefinitionMaterial';
import { DeviceDefinitionProperty } from '../backbone/DeviceDefinitionProperty';
import { DeviceDefinitionSpecialization } from '../backbone/DeviceDefinitionSpecialization';
import { DeviceDefinitionUdiDeviceIdentifier } from '../backbone/DeviceDefinitionUdiDeviceIdentifier';
import { Identifier } from '../elements/Identifier';
import { ProdCharacteristic } from '../backbone/ProdCharacteristic';
import { ProductShelfLife } from '../backbone/ProductShelfLife';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DeviceDefinition extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'DeviceDefinition' as const;

  /**
   * Device capabilities.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceDefinitionCapability)
  capability?: DeviceDefinitionCapability[];

  /**
   * used for troubleshooting etc.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  contact?: ContactPoint[];

  /**
   * A name given to the device to identify it.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceDefinitionDeviceName)
  deviceName?: DeviceDefinitionDeviceName[];

  /**
   * Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For exam
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Language code for the human-readable text strings produced by the device (all supported).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  languageCode?: CodeableConcept[];

  /**
   * A name of the manufacturer.
   */
  @IsOptional()
  @IsString()
  manufacturerString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _manufacturerString?: Element;

  /**
   * A name of the manufacturer.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  manufacturerReference?: Reference;

  /**
   * A substance used to create the material(s) of which the device is made.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceDefinitionMaterial)
  material?: DeviceDefinitionMaterial[];

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
   * Access to on-line information about the device.
   */
  @IsOptional()
  @IsString()
  onlineInformation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _onlineInformation?: Element;

  /**
   * An organization that is responsible for the provision and ongoing maintenance of the device.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  owner?: Reference;

  /**
   * The parent device it can be part of.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  parentDevice?: Reference;

  /**
   * Dimensions, color etc.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => ProdCharacteristic)
  physicalCharacteristics?: ProdCharacteristic;

  /**
   * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceDefinitionProperty)
  property?: DeviceDefinitionProperty[];

  /**
   * The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devi
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * Safety characteristics of the device.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  safety?: CodeableConcept[];

  /**
   * Shelf Life and storage information.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductShelfLife)
  shelfLifeStorage?: ProductShelfLife[];

  /**
   * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used f
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceDefinitionSpecialization)
  specialization?: DeviceDefinitionSpecialization[];

  /**
   * What kind of device or device system this is.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarrie
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceDefinitionUdiDeviceIdentifier)
  udiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifier[];

  /**
   * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement m
   */
  @IsOptional()
  @IsString()
  url?: string;

  /**
   * Constructor for DeviceDefinition
   */
  constructor(source: Partial<DeviceDefinition> = {}) {
    super(source);
    this.resourceType = 'DeviceDefinition';
  }
}
