import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Address } from '../elements/Address';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { ContactPoint } from '../elements/ContactPoint';
import { HumanName } from '../elements/HumanName';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import { RelatedPersonCommunication } from '../backbone/RelatedPersonCommunication';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class RelatedPerson extends DomainResource implements fhir.RelatedPerson {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'RelatedPerson' as const;

  /**
   * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
   */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _active?: Element;

  /**
   * Address where the related person can be contacted or visited.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Address)
  address?: Address[];

  /**
   * The date on which the related person was born.
   */
  @IsOptional()
  @IsString()
  birthDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _birthDate?: Element;

  /**
   * If no language is specified, this *implies* that the default local language is spoken.  If you need to convey proficienc
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RelatedPersonCommunication)
  communication?: RelatedPersonCommunication[];

  /**
   * Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes.
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
   * A name associated with the person.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HumanName)
  name?: HumanName[];

  /**
   * The patient this person is related to.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /**
   * The period of time during which this relationship is or was active. If there are no dates defined, then the interval is 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * Image of the person.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Attachment)
  photo?: Attachment[];

  /**
   * The nature of the relationship between a patient and the related person.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  relationship?: CodeableConcept[];

  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for c
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /**
   * Constructor for RelatedPerson
   */
  constructor(source: Partial<RelatedPerson> = {}) {
    super(source);
    this.resourceType = 'RelatedPerson';
  }
}
