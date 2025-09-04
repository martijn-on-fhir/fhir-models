import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { SubstanceSourceMaterialOrganismAuthor } from './SubstanceSourceMaterialOrganismAuthor';
import { SubstanceSourceMaterialOrganismHybrid } from './SubstanceSourceMaterialOrganismHybrid';
import { SubstanceSourceMaterialOrganismOrganismGeneral } from './SubstanceSourceMaterialOrganismOrganismGeneral';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceSourceMaterialOrganism extends BackboneElement {
  /**
   * 4.9.13.6.1 Author type (Conditional).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSourceMaterialOrganismAuthor)
  author?: SubstanceSourceMaterialOrganismAuthor[];

  /**
   * The family of an organism shall be specified.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  family?: CodeableConcept;

  /**
   * The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scient
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  genus?: CodeableConcept;

  /**
   * 4.9.13.8.1 Hybrid species maternal organism ID (Optional).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubstanceSourceMaterialOrganismHybrid)
  hybrid?: SubstanceSourceMaterialOrganismHybrid;

  /**
   * The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine,
   */
  @IsOptional()
  @IsString()
  intraspecificDescription?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _intraspecificDescription?: Element;

  /**
   * The Intraspecific type of an organism shall be specified.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  intraspecificType?: CodeableConcept;

  /**
   * 4.9.13.7.1 Kingdom (Conditional).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubstanceSourceMaterialOrganismOrganismGeneral)
  organismGeneral?: SubstanceSourceMaterialOrganismOrganismGeneral;

  /**
   * The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is pre
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  species?: CodeableConcept;

  /**
   * Constructor for SubstanceSourceMaterialOrganism
   */
  constructor(source: Partial<SubstanceSourceMaterialOrganism> = {}) {
    super(source);
  }
}
