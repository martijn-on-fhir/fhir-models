import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod } from './MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies extends BackboneElement implements fhir.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {
  /**
   * Coded expression for the species.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * A species specific time during which consumption of animal product is not appropriate.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod)
  withdrawalPeriod?: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod[];

  /**
   * Constructor for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies
   */
  constructor(source: Partial<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies> = {}) {
    super(source);
  }
}
