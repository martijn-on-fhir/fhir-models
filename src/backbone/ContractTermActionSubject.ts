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
export class ContractTermActionSubject extends BackboneElement implements fhir.ContractTermActionSubject {
  /**
   * The entity the action is performed or not performed on or for.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  reference?: Reference[];

  /**
   * Role type of agent assigned roles in this Contract.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  role?: CodeableConcept;

  /**
   * Constructor for ContractTermActionSubject
   */
  constructor(source: Partial<ContractTermActionSubject> = {}) {
    super(source);
  }
}
