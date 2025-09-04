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
import { PractitionerQualification } from '../backbone/PractitionerQualification';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class Practitioner extends DomainResource implements fhir.Practitioner {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'Practitioner' as const;

  /**
   * If the practitioner is not in use by one organization, then it should mark the period on the PractitonerRole with an end
   */
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _active?: Element;

  /**
   * The PractitionerRole does not have an address value on it, as it is expected that the location property be used for this
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Address)
  address?: Address[];

  /**
   * The date of birth for the practitioner.
   */
  @IsOptional()
  @IsString()
  birthDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _birthDate?: Element;

  /**
   * The structure aa-BB with this exact casing is one the most widely used notations for locale. However not all systems cod
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  communication?: CodeableConcept[];

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
   * An identifier that applies to this person in this role.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The selection of the use property should ensure that there is a single usual name specified, and others use the nickname
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HumanName)
  name?: HumanName[];

  /**
   * Image of the person.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Attachment)
  photo?: Attachment[];

  /**
   * The official certifications, training, and licenses that authorize or otherwise pertain to the provision of care by the 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PractitionerQualification)
  qualification?: PractitionerQualification[];

  /**
   * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for c
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  /**
   * Constructor for Practitioner
   */
  constructor(source: Partial<Practitioner> = {}) {
    super(source);
    this.resourceType = 'Practitioner';
  }
}
