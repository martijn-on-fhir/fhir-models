import 'reflect-metadata';
import {
  IsOptional,
  IsBoolean,
  IsString,
  IsArray,
  ValidateNested,
  IsIn,
  IsInt,
  Min
} from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Address } from '../elements/Address';
import { PatientCommunication } from '../backbone/PatientCommunication';
import { PatientContact } from '../backbone/PatientContact';
import { Reference } from '../elements/Reference';
import { Identifier } from '../elements/Identifier';
import { PatientLink } from '../backbone/PatientLink';
import { CodeableConcept } from '../elements/CodeableConcept';
import { HumanName } from '../elements/HumanName';
import { Attachment } from '../elements/Attachment';
import { ContactPoint } from '../elements/ContactPoint';
import { Patient as fhir } from '../r4';

export class Patient extends DomainResource implements fhir.Patient {
  readonly resourceType = 'Patient' as const;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  _active?: Element;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Address)
  address?: Address[];

  @IsOptional()
  @IsString()
  birthDate?: string;

  @IsOptional()
  _birthDate?: Element;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PatientCommunication)
  communication?: PatientCommunication[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PatientContact)
  contact?: PatientContact[];

  @IsOptional()
  @IsBoolean()
  deceasedBoolean?: boolean;

  @IsOptional()
  _deceasedBoolean?: Element;

  @IsOptional()
  @IsString()
  deceasedDateTime?: string;

  @IsOptional()
  _deceasedDateTime?: Element;

  @IsOptional()
  @IsIn(['male', 'female', 'other', 'unknown'])
  gender?: 'male' | 'female' | 'other' | 'unknown';

  @IsOptional()
  _gender?: Element;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  generalPractitioner?: Reference[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PatientLink)
  link?: PatientLink[];

  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  managingOrganization?: Reference;

  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  maritalStatus?: CodeableConcept;

  @IsOptional()
  @IsBoolean()
  multipleBirthBoolean?: boolean;

  @IsOptional()
  _multipleBirthBoolean?: Element;

  @IsOptional()
  @IsInt()
  @Min(1)
  multipleBirthInteger?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HumanName)
  name?: HumanName[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Attachment)
  photo?: Attachment[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactPoint)
  telecom?: ContactPoint[];

  constructor(source: Partial<Patient> = {}) {
    super(source);
    this.resourceType = 'Patient';
    Object.assign(this, source);
  }
}