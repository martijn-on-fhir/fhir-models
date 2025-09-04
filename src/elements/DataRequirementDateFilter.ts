import 'reflect-metadata';
import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Element } from '../base/Element';
import { Period } from './Period';
import { Duration } from './Duration';

/**
 * Date filters specify additional constraints on the data in terms of the applicable date range for specific elements.
 */
export class DataRequirementDateFilter extends Element {
  /**
   * The path attribute contains a [Simple FHIR Subset](fhirpath.html#simple) that allows path traversal, but not calculation.
   */
  @IsOptional()
  @IsString()
  path?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _path?: Element;

  /**
   * A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.
   */
  @IsOptional()
  @IsString()
  searchParam?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _searchParam?: Element;

  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  @IsOptional()
  @IsString()
  valueDateTime?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _valueDateTime?: Element;

  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  valuePeriod?: Period;

  /**
   * The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  valueDuration?: Duration;

  /**
   * Constructor for DataRequirementDateFilter
   */
  constructor(source: Partial<DataRequirementDateFilter> = {}) {
    super(source);
  }
}