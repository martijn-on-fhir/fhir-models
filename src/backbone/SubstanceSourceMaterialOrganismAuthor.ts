import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceSourceMaterialOrganismAuthor extends BackboneElement {
  /**
   * The author of an organism species shall be specified. The author year of an organism shall also be specified when applic
   */
  @IsOptional()
  @IsString()
  authorDescription?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _authorDescription?: Element;

  /**
   * The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to 
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  authorType?: CodeableConcept;

  /**
   * Constructor for SubstanceSourceMaterialOrganismAuthor
   */
  constructor(source: Partial<SubstanceSourceMaterialOrganismAuthor> = {}) {
    super(source);
  }
}
