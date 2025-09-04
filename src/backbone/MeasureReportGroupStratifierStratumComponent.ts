import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MeasureReportGroupStratifierStratumComponent extends BackboneElement {
  /**
   * The code for the stratum component value.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * The stratum component value.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  value?: CodeableConcept;

  /**
   * Constructor for MeasureReportGroupStratifierStratumComponent
   */
  constructor(source: Partial<MeasureReportGroupStratifierStratumComponent> = {}) {
    super(source);
  }
}
