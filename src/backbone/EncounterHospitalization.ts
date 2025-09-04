import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class EncounterHospitalization extends BackboneElement {
  /**
   * From where patient was admitted (physician referral, transfer).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  admitSource?: CodeableConcept;

  /**
   * Location/organization to which the patient is discharged.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  destination?: Reference;

  /**
   * For example, a patient may request both a dairy-free and nut-free diet preference (not mutually exclusive).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  dietPreference?: CodeableConcept[];

  /**
   * Category or kind of location after discharge.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  dischargeDisposition?: CodeableConcept;

  /**
   * The location/organization from which the patient came before admission.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  origin?: Reference;

  /**
   * Pre-admission identifier.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  preAdmissionIdentifier?: Identifier;

  /**
   * Whether this hospitalization is a readmission and why if known.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  reAdmission?: CodeableConcept;

  /**
   * Any special requests that have been made for this hospitalization encounter, such as the provision of specific equipment
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  specialArrangement?: CodeableConcept[];

  /**
   * Special courtesies (VIP, board member).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  specialCourtesy?: CodeableConcept[];

  /**
   * Constructor for EncounterHospitalization
   */
  constructor(source: Partial<EncounterHospitalization> = {}) {
    super(source);
  }
}
