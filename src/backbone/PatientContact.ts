import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Address } from '../elements/Address';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactPoint } from '../elements/ContactPoint';
import { HumanName } from '../elements/HumanName';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class PatientContact extends BackboneElement implements fhir.PatientContact {
  /**
   * Address for the contact person.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Address)
  address?: Address;

  /**
   * Administrative Gender - the gender that the contact person is considered to have for administration and record keeping p
   */
  @IsOptional()
  @IsIn(['male', 'female', 'other', 'unknown'])
  gender?: ('male'|'female'|'other'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _gender?: Element;

  /**
   * A name associated with the contact person.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => HumanName)
  name?: HumanName;

  /**
   * Organization on behalf of which the contact is acting or for which the contact is working.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  organization?: Reference;

  /**
   * The period during which this contact person or organization is valid to be contacted relating to this patient.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * The nature of the relationship between the patient and the contact person.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  relationship?: CodeableConcept[];

  /**
   * Contact may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /**
   * Constructor for PatientContact
   */
  constructor(source: Partial<PatientContact> = {}) {
    super(source);
  }
}
