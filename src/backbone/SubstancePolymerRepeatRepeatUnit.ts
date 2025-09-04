import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { SubstanceAmount } from './SubstanceAmount';
import { SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation } from './SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation';
import { SubstancePolymerRepeatRepeatUnitStructuralRepresentation } from './SubstancePolymerRepeatRepeatUnitStructuralRepresentation';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstancePolymerRepeatRepeatUnit extends BackboneElement implements fhir.SubstancePolymerRepeatRepeatUnit {
  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubstanceAmount)
  amount?: SubstanceAmount;

  /**
   * Todo.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation)
  degreeOfPolymerisation?: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[];

  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  orientationOfPolymerisation?: CodeableConcept;

  /**
   * Todo.
   */
  @IsOptional()
  @IsString()
  repeatUnit?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _repeatUnit?: Element;

  /**
   * Todo.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstancePolymerRepeatRepeatUnitStructuralRepresentation)
  structuralRepresentation?: SubstancePolymerRepeatRepeatUnitStructuralRepresentation[];

  /**
   * Constructor for SubstancePolymerRepeatRepeatUnit
   */
  constructor(source: Partial<SubstancePolymerRepeatRepeatUnit> = {}) {
    super(source);
  }
}
