import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { DeviceMetricCalibration } from '../backbone/DeviceMetricCalibration';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import { Timing } from '../backbone/Timing';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class DeviceMetric extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'DeviceMetric' as const;

  /**
   * Describes the calibrations that have been performed or that are required to be performed.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DeviceMetricCalibration)
  calibration?: DeviceMetricCalibration[];

  /**
   * Indicates the category of the observation generation process. A DeviceMetric can be for example a setting, measurement, 
   */
  @IsOptional()
  @IsIn(['measurement', 'setting', 'calculation', 'unspecified'])
  category?: ('measurement'|'setting'|'calculation'|'unspecified');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _category?: Element;

  /**
   * Describes the color representation for the metric. This is often used to aid clinicians to track and identify parameter 
   */
  @IsOptional()
  @IsIn(['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'])
  color?: ('black'|'red'|'green'|'yellow'|'blue'|'magenta'|'cyan'|'white');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _color?: Element;

  /**
   * For identifiers assigned to a device by the device or gateway software, the `system` element of the identifier should be
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Describes the measurement repetition time. This is not necessarily the same as the update period. The measurement repeti
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Timing)
  measurementPeriod?: Timing;

  /**
   * Indicates current operational state of the device. For example: On, Off, Standby, etc.
   */
  @IsOptional()
  @IsIn(['on', 'off', 'standby', 'entered-in-error'])
  operationalStatus?: ('on'|'off'|'standby'|'entered-in-error');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _operationalStatus?: Element;

  /**
   * Describes the link to the  Device that this DeviceMetric belongs to and that provide information about the location of t
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  parent?: Reference;

  /**
   * Describes the link to the  Device that this DeviceMetric belongs to and that contains administrative device information 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  source?: Reference;

  /**
   * DeviceMetric.type can be referred to either IEEE 11073-10101 or LOINC.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * DeviceMetric.unit can refer to either UCUM or preferable a RTMMS coding system.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  unit?: CodeableConcept;

  /**
   * Constructor for DeviceMetric
   */
  constructor(source: Partial<DeviceMetric> = {}) {
    super(source);
    this.resourceType = 'DeviceMetric';
  }
}
