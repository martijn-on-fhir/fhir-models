import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MeasureReportGroupPopulation } from './MeasureReportGroupPopulation';
import { MeasureReportGroupStratifier } from './MeasureReportGroupStratifier';
import { Quantity } from '../elements/Quantity';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MeasureReportGroup extends BackboneElement implements fhir.MeasureReportGroup {
  /**
   * The meaning of the population group as defined in the measure definition.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and base
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  measureScore?: Quantity;

  /**
   * The populations that make up the population group, one for each type of population appropriate for the measure.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureReportGroupPopulation)
  population?: MeasureReportGroupPopulation[];

  /**
   * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measur
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureReportGroupStratifier)
  stratifier?: MeasureReportGroupStratifier[];

  /**
   * Constructor for MeasureReportGroup
   */
  constructor(source: Partial<MeasureReportGroup> = {}) {
    super(source);
  }
}
