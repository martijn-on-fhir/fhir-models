import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CareTeamParticipant extends BackboneElement implements fhir.CareTeamParticipant {
  /**
   * Patient only needs to be listed if they have a role other than "subject of care". Member is optional because some partic
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  member?: Reference;

  /**
   * The organization of the practitioner.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  onBehalfOf?: Reference;

  /**
   * Indicates when the specific member or organization did (or is intended to) come into effect and end.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * Roles may sometimes be inferred by type of Practitioner.  These are relationships that hold only within the context of t
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  role?: CodeableConcept[];

  /**
   * Constructor for CareTeamParticipant
   */
  constructor(source: Partial<CareTeamParticipant> = {}) {
    super(source);
  }
}
