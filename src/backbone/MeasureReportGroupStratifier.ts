import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MeasureReportGroupStratifierStratum } from './MeasureReportGroupStratifierStratum';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MeasureReportGroupStratifier extends BackboneElement {
  /**
   * The meaning of this stratifier, as defined in the measure definition.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  code?: CodeableConcept[];

  /**
   * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administr
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MeasureReportGroupStratifierStratum)
  stratum?: MeasureReportGroupStratifierStratum[];

  /**
   * Constructor for MeasureReportGroupStratifier
   */
  constructor(source: Partial<MeasureReportGroupStratifier> = {}) {
    super(source);
  }
}
