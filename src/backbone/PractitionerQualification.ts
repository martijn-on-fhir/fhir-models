import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class PractitionerQualification extends BackboneElement {
  /**
   * Coded representation of the qualification.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * An identifier that applies to this person's qualification in this role.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Organization that regulates and issues the qualification.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  issuer?: Reference;

  /**
   * Period during which the qualification is valid.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * Constructor for PractitionerQualification
   */
  constructor(source: Partial<PractitionerQualification> = {}) {
    super(source);
  }
}
