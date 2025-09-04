import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { AdverseEventSuspectEntityCausality } from './AdverseEventSuspectEntityCausality';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class AdverseEventSuspectEntity extends BackboneElement implements fhir.AdverseEventSuspectEntity {
  /**
   * Information on the possible cause of the event.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AdverseEventSuspectEntityCausality)
  causality?: AdverseEventSuspectEntityCausality[];

  /**
   * Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administrat
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  instance?: Reference;

  /**
   * Constructor for AdverseEventSuspectEntity
   */
  constructor(source: Partial<AdverseEventSuspectEntity> = {}) {
    super(source);
  }
}
