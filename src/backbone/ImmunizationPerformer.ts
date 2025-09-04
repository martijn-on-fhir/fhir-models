import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ImmunizationPerformer extends BackboneElement {
  /**
   * When the individual practitioner who performed the action is known, it is best to send.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  actor?: Reference;

  /**
   * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  function?: CodeableConcept;

  /**
   * Constructor for ImmunizationPerformer
   */
  constructor(source: Partial<ImmunizationPerformer> = {}) {
    super(source);
  }
}
