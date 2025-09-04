import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ConsentProvisionActor extends BackboneElement implements fhir.ConsentProvisionActor {
  /**
   * The resource that identifies the actor. To identify actors by type, use group to identify a set of actors by some proper
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  reference?: Reference;

  /**
   * How the individual is involved in the resources content that is described in the exception.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  role?: CodeableConcept;

  /**
   * Constructor for ConsentProvisionActor
   */
  constructor(source: Partial<ConsentProvisionActor> = {}) {
    super(source);
  }
}
