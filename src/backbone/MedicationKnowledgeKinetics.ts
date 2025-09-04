import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Duration } from '../elements/Duration';
import { Quantity } from '../elements/Quantity';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationKnowledgeKinetics extends BackboneElement implements fhir.MedicationKnowledgeKinetics {
  /**
   * The drug concentration measured at certain discrete points in time.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Quantity)
  areaUnderCurve?: Quantity[];

  /**
   * The time required for any specified property (e.g., the concentration of a substance in the body) to decrease by half.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  halfLifePeriod?: Duration;

  /**
   * The median lethal dose of a drug.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Quantity)
  lethalDose50?: Quantity[];

  /**
   * Constructor for MedicationKnowledgeKinetics
   */
  constructor(source: Partial<MedicationKnowledgeKinetics> = {}) {
    super(source);
  }
}
