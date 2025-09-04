import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Address } from '../elements/Address';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactPoint } from '../elements/ContactPoint';
import { HumanName } from '../elements/HumanName';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class OrganizationContact extends BackboneElement implements fhir.OrganizationContact {
  /**
   * Visiting or postal addresses for the contact.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Address)
  address?: Address;

  /**
   * A name associated with the contact.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => HumanName)
  name?: HumanName;

  /**
   * Indicates a purpose for which the contact can be reached.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  purpose?: CodeableConcept;

  /**
   * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /**
   * Constructor for OrganizationContact
   */
  constructor(source: Partial<OrganizationContact> = {}) {
    super(source);
  }
}
