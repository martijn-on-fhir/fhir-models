import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SpecimenContainer extends BackboneElement {
  /**
   * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  additiveCodeableConcept?: CodeableConcept;

  /**
   * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  additiveReference?: Reference;

  /**
   * The capacity (volume or other measure) the container may contain.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  capacity?: Quantity;

  /**
   * Textual description of the container.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may d
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on th
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  specimenQuantity?: Quantity;

  /**
   * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for SpecimenContainer
   */
  constructor(source: Partial<SpecimenContainer> = {}) {
    super(source);
  }
}
