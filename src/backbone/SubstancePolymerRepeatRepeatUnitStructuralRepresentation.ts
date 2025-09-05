import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstancePolymerRepeatRepeatUnitStructuralRepresentation extends BackboneElement {
  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  attachment?: Attachment;

  /**
   * Todo.
   */
  @IsOptional()
  @IsString()
  representation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _representation?: Element;

  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for SubstancePolymerRepeatRepeatUnitStructuralRepresentation
   */
  constructor(source: Partial<SubstancePolymerRepeatRepeatUnitStructuralRepresentation> = {}) {
    super(source);
  }
}
