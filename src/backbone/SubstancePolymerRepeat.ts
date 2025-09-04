import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { SubstancePolymerRepeatRepeatUnit } from './SubstancePolymerRepeatRepeatUnit';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstancePolymerRepeat extends BackboneElement {
  /**
   * Todo.
   */
  @IsOptional()
  @IsString()
  averageMolecularFormula?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _averageMolecularFormula?: Element;

  /**
   * Todo.
   */
  @IsOptional()
  @IsNumber()
  numberOfUnits?: number;

  /**
   * Todo.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstancePolymerRepeatRepeatUnit)
  repeatUnit?: SubstancePolymerRepeatRepeatUnit[];

  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  repeatUnitAmountType?: CodeableConcept;

  /**
   * Constructor for SubstancePolymerRepeat
   */
  constructor(source: Partial<SubstancePolymerRepeat> = {}) {
    super(source);
  }
}
