import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Address } from '../elements/Address';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactPoint } from '../elements/ContactPoint';
import { Identifier } from '../elements/Identifier';
import { OrganizationContact } from '../backbone/OrganizationContact';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Organization extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Organization' as const;

  /**
   * This active flag is not intended to be used to mark an organization as temporarily closed or under construction. Instead
   */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _active?: Element;

  /**
   * Organization may have multiple addresses with different uses or applicable periods. The use code 'home' is not to be use
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Address)
  address?: Address[];

  /**
   * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but 
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  alias?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _alias?: Element[];

  /**
   * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine wh
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrganizationContact)
  contact?: OrganizationContact[];

  /**
   * Technical endpoints providing access to services operated for the organization.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  endpoint?: Reference[];

  /**
   * Identifier for the organization that is used to identify the organization across multiple disparate systems.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * If the name of an organization changes, consider putting the old name in the alias column so that it can still be locate
   */
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _name?: Element;

  /**
   * The organization of which this organization forms a part.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  partOf?: Reference;

  /**
   * The use code 'home' is not to be used. Note that these contacts are not the contact details of people who are employed b
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /**
   * Organizations can be corporations, wards, sections, clinical teams, government departments, etc. Note that code is gener
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /**
   * Constructor for Organization
   */
  constructor(source: Partial<Organization> = {}) {
    super(source);
    this.resourceType = 'Organization';
  }
}
