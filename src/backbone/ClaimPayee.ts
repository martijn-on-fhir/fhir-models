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
export class ClaimPayee extends BackboneElement implements fhir.ClaimPayee {
  /**
   * Not required if the payee is 'subscriber' or 'provider'.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  party?: Reference;

  /**
   * Type of Party to be reimbursed: subscriber, provider, other.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for ClaimPayee
   */
  constructor(source: Partial<ClaimPayee> = {}) {
    super(source);
  }
}
