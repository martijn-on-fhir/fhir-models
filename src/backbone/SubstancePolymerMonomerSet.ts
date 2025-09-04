import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { SubstancePolymerMonomerSetStartingMaterial } from './SubstancePolymerMonomerSetStartingMaterial';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstancePolymerMonomerSet extends BackboneElement implements fhir.SubstancePolymerMonomerSet {
  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  ratioType?: CodeableConcept;

  /**
   * Todo.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstancePolymerMonomerSetStartingMaterial)
  startingMaterial?: SubstancePolymerMonomerSetStartingMaterial[];

  /**
   * Constructor for SubstancePolymerMonomerSet
   */
  constructor(source: Partial<SubstancePolymerMonomerSet> = {}) {
    super(source);
  }
}
