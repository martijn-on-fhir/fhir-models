import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Duration } from '../elements/Duration';
import { MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies } from './MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies';
import { Quantity } from '../elements/Quantity';
import { Ratio } from '../elements/Ratio';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductPharmaceuticalRouteOfAdministration extends BackboneElement implements fhir.MedicinalProductPharmaceuticalRouteOfAdministration {
  /**
   * Coded expression for the route.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numer
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  firstDose?: Quantity;

  /**
   * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as p
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  maxDosePerDay?: Quantity;

  /**
   * The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial auth
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  maxDosePerTreatmentPeriod?: Ratio;

  /**
   * The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numeri
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  maxSingleDose?: Quantity;

  /**
   * The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol r
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Duration)
  maxTreatmentPeriod?: Duration;

  /**
   * A species for which this route applies.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies)
  targetSpecies?: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies[];

  /**
   * Constructor for MedicinalProductPharmaceuticalRouteOfAdministration
   */
  constructor(source: Partial<MedicinalProductPharmaceuticalRouteOfAdministration> = {}) {
    super(source);
  }
}
