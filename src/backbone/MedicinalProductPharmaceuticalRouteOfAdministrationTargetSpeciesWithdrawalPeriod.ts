import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends BackboneElement implements fhir.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
  /**
   * Extra information about the withdrawal period.
   */
  @IsOptional()
  @IsString()
  supportingInformation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _supportingInformation?: Element;

  /**
   * Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  tissue?: CodeableConcept;

  /**
   * A value for the time.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  value?: Quantity;

  /**
   * Constructor for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod
   */
  constructor(source: Partial<MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod> = {}) {
    super(source);
  }
}
