import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Address } from '../elements/Address';
import { Attachment } from '../elements/Attachment';
import { ContactPoint } from '../elements/ContactPoint';
import { HumanName } from '../elements/HumanName';
import { Identifier } from '../elements/Identifier';
import { PersonLink } from '../backbone/PersonLink';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Person extends DomainResource implements fhir.Person {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Person' as const;

  /**
   * Whether this person's record is in active use.
   */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _active?: Element;

  /**
   * Person may have multiple addresses with different uses or applicable periods.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Address)
  address?: Address[];

  /**
   * At least an estimated year should be provided as a guess if the real DOB is unknown.
   */
  @IsOptional()
  @IsString()
  birthDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _birthDate?: Element;

  /**
   * The gender might not match the biological sex as determined by genetics, or the individual's preferred identification. N
   */
  @IsOptional()
  @IsIn(['male', 'female', 'other', 'unknown'])
  gender?: ('male'|'female'|'other'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _gender?: Element;

  /**
   * Identifier for a person within a particular scope.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Link to a resource that concerns the same actual person.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PersonLink)
  link?: PersonLink[];

  /**
   * The organization that is the custodian of the person record.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  managingOrganization?: Reference;

  /**
   * Person may have multiple names with different uses or applicable periods.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HumanName)
  name?: HumanName[];

  /**
   * An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  photo?: Attachment;

  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for c
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /**
   * Constructor for Person
   */
  constructor(source: Partial<Person> = {}) {
    super(source);
    this.resourceType = 'Person';
  }
}
