import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MeasureReportGroupStratifierStratumComponent } from './MeasureReportGroupStratifierStratumComponent';
import { MeasureReportGroupStratifierStratumPopulation } from './MeasureReportGroupStratifierStratumPopulation';
import { Quantity } from '../elements/Quantity';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MeasureReportGroupStratifierStratum extends BackboneElement {
  /**
   * A stratifier component value.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureReportGroupStratifierStratumComponent)
  component?: MeasureReportGroupStratifierStratumComponent[];

  /**
   * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  measureScore?: Quantity;

  /**
   * The populations that make up the stratum, one for each type of population appropriate to the measure.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureReportGroupStratifierStratumPopulation)
  population?: MeasureReportGroupStratifierStratumPopulation[];

  /**
   * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  value?: CodeableConcept;

  /**
   * Constructor for MeasureReportGroupStratifierStratum
   */
  constructor(source: Partial<MeasureReportGroupStratifierStratum> = {}) {
    super(source);
  }
}
