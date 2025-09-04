import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ActivityDefinitionParticipant extends BackboneElement implements fhir.ActivityDefinitionParticipant {
  /**
   * The role the participant should play in performing the described action.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  role?: CodeableConcept;

  /**
   * The type of participant in the action.
   */
  @IsOptional()
  @IsIn(['patient', 'practitioner', 'related-person', 'device'])
  type?: ('patient'|'practitioner'|'related-person'|'device');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for ActivityDefinitionParticipant
   */
  constructor(source: Partial<ActivityDefinitionParticipant> = {}) {
    super(source);
  }
}
