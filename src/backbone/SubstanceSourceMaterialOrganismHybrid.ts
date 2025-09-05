import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceSourceMaterialOrganismHybrid extends BackboneElement {
  /**
   * The hybrid type of an organism shall be specified.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  hybridType?: CodeableConcept;

  /**
   * The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabul
   */
  @IsOptional()
  @IsString()
  maternalOrganismId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _maternalOrganismId?: Element;

  /**
   * The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t alw
   */
  @IsOptional()
  @IsString()
  maternalOrganismName?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _maternalOrganismName?: Element;

  /**
   * The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabul
   */
  @IsOptional()
  @IsString()
  paternalOrganismId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _paternalOrganismId?: Element;

  /**
   * The name of the paternal species constituting the hybrid organism shall be specified.
   */
  @IsOptional()
  @IsString()
  paternalOrganismName?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _paternalOrganismName?: Element;

  /**
   * Constructor for SubstanceSourceMaterialOrganismHybrid
   */
  constructor(source: Partial<SubstanceSourceMaterialOrganismHybrid> = {}) {
    super(source);
  }
}
