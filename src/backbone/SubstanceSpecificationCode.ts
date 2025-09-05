import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceSpecificationCode extends BackboneElement {
  /**
   * The specific code.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  code?: CodeableConcept;

  /**
   * Any comment can be provided in this field, if necessary.
   */
  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _comment?: Element;

  /**
   * Supporting literature.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  source?: Reference[];

  /**
   * Status of the code assignment.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  status?: CodeableConcept;

  /**
   * The date at which the code status is changed as part of the terminology maintenance.
   */
  @IsOptional()
  @IsString()
  statusDate?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _statusDate?: Element;

  /**
   * Constructor for SubstanceSpecificationCode
   */
  constructor(source: Partial<SubstanceSpecificationCode> = {}) {
    super(source);
  }
}
