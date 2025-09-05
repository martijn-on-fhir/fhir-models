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
export class SubstanceSpecificationStructureRepresentation extends BackboneElement {
  /**
   * An attached file with the structural representation.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  attachment?: Attachment;

  /**
   * The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX.
   */
  @IsOptional()
  @IsString()
  representation?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _representation?: Element;

  /**
   * The type of structure (e.g. Full, Partial, Representative).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for SubstanceSpecificationStructureRepresentation
   */
  constructor(source: Partial<SubstanceSpecificationStructureRepresentation> = {}) {
    super(source);
  }
}
