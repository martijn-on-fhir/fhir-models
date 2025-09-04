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
export class EncounterParticipant extends BackboneElement implements fhir.EncounterParticipant {
  /**
   * Persons involved in the encounter other than the patient.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  individual?: Reference;

  /**
   * The period of time that the specified participant participated in the encounter. These can overlap or be sub-sets of the
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * The participant type indicates how an individual participates in an encounter. It includes non-practitioner participants
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  type?: CodeableConcept[];

  /**
   * Constructor for EncounterParticipant
   */
  constructor(source: Partial<EncounterParticipant> = {}) {
    super(source);
  }
}
