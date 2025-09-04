import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class ProcedurePerformer extends BackboneElement {
  /**
   * The practitioner who was involved in the procedure.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  actor?: Reference;

  /**
   * Distinguishes the type of involvement of the performer in the procedure. For example, surgeon, anaesthetist, endoscopist
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  function?: CodeableConcept;

  /**
   * The organization the device or practitioner was acting on behalf of.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  onBehalfOf?: Reference;

  /**
   * Constructor for ProcedurePerformer
   */
  constructor(source: Partial<ProcedurePerformer> = {}) {
    super(source);
  }
}
