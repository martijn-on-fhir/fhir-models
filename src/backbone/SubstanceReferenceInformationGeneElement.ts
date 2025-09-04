import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceReferenceInformationGeneElement extends BackboneElement implements fhir.SubstanceReferenceInformationGeneElement {
  /**
   * Todo.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  element?: Identifier;

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
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for SubstanceReferenceInformationGeneElement
   */
  constructor(source: Partial<SubstanceReferenceInformationGeneElement> = {}) {
    super(source);
  }
}
