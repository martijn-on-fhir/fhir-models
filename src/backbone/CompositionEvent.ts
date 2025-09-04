import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Period } from '../elements/Period';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class CompositionEvent extends BackboneElement {
  /**
   * An event can further specialize the act inherent in the typeCode, such as where it is simply "Procedure Report" and the 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  code?: CodeableConcept[];

  /**
   * The description and/or reference of the event(s) being documented. For example, this could be used to document such a co
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  detail?: Reference[];

  /**
   * The period of time covered by the documentation. There is no assertion that the documentation is a complete representati
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Period)
  period?: Period;

  /**
   * Constructor for CompositionEvent
   */
  constructor(source: Partial<CompositionEvent> = {}) {
    super(source);
  }
}
