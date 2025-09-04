import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Dosage } from './Dosage';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Quantity } from '../elements/Quantity';
import { Ratio } from '../elements/Ratio';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MedicationAdministrationDosage extends BackboneElement {
  /**
   * If the administration is not instantaneous (rate is present), this can be specified to convey the total amount administe
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  dose?: Quantity;

  /**
   * One of the reasons this attribute is not used often, is that the method is often pre-coordinated with the route and/or f
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  method?: CodeableConcept;

  /**
   * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be capt
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Ratio)
  rateRatio?: Ratio;

  /**
   * If the rate changes over time, and you want to capture this in MedicationAdministration, then each change should be capt
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  rateQuantity?: Quantity;

  /**
   * A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  Fo
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  route?: CodeableConcept;

  /**
   * If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the stan
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  site?: CodeableConcept;

  /**
   * Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is presen
   */
  @IsOptional()
  @IsString()
  text?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _text?: Element;

  /**
   * Constructor for MedicationAdministrationDosage
   */
  constructor(source: Partial<MedicationAdministrationDosage> = {}) {
    super(source);
  }
}
