import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactPoint } from '../elements/ContactPoint';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class OrganizationAffiliation extends DomainResource implements fhir.OrganizationAffiliation {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'OrganizationAffiliation' as const;

  /**
   * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specif
   */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _active?: Element;

  /**
   * Definition of the role the participatingOrganization plays in the association.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  code?: CodeableConcept[];

  /**
   * Technical endpoints providing access to services operated for this role.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  endpoint?: Reference[];

  /**
   * Healthcare services provided through the role.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  healthcareService?: Reference[];

  /**
   * Business identifiers that are specific to this role.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The location(s) at which the role occurs.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  location?: Reference[];

  /**
   * Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at th
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  network?: Reference[];

  /**
   * Organization where the role is available (primary organization/has members).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  organization?: Reference;

  /**
   * The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. provi
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  participatingOrganization?: Reference;

  /**
   * The period during which the participatingOrganization is affiliated with the primary organization.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * Specific specialty of the participatingOrganization in the context of the role.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  specialty?: CodeableConcept[];

  /**
   * Contact details at the participatingOrganization relevant to this Affiliation.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /**
   * Constructor for OrganizationAffiliation
   */
  constructor(source: Partial<OrganizationAffiliation> = {}) {
    super(source);
    this.resourceType = 'OrganizationAffiliation';
  }
}
