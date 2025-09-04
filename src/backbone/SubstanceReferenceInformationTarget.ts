import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Quantity } from '../elements/Quantity';
import { Range } from '../elements/Range';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceReferenceInformationTarget extends BackboneElement {
  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  amountQuantity?: Quantity;

  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Range)
  amountRange?: Range;

  /**
   * Todo.
   */
  @IsOptional()
  @IsString()
  amountString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _amountString?: Element;

  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  amountType?: CodeableConcept;

  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  interaction?: CodeableConcept;

  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  organism?: CodeableConcept;

  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  organismType?: CodeableConcept;

  /**
   * Todo.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  source?: Reference[];

  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  target?: Identifier;

  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for SubstanceReferenceInformationTarget
   */
  constructor(source: Partial<SubstanceReferenceInformationTarget> = {}) {
    super(source);
  }
}
