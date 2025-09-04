import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { SubstanceSourceMaterialFractionDescription } from '../backbone/SubstanceSourceMaterialFractionDescription';
import { SubstanceSourceMaterialOrganism } from '../backbone/SubstanceSourceMaterialOrganism';
import { SubstanceSourceMaterialPartDescription } from '../backbone/SubstanceSourceMaterialPartDescription';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceSourceMaterial extends DomainResource implements fhir.SubstanceSourceMaterial {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'SubstanceSourceMaterial' as const;

  /**
   * The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in acco
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CodeableConcept)
  countryOfOrigin?: CodeableConcept[];

  /**
   * Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substanc
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  developmentStage?: CodeableConcept;

  /**
   * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to 
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSourceMaterialFractionDescription)
  fractionDescription?: SubstanceSourceMaterialFractionDescription[];

  /**
   * The place/region where the plant is harvested or the places/regions where the animal source material has its habitat.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  geographicalLocation?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _geographicalLocation?: Element[];

  /**
   * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be sp
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubstanceSourceMaterialOrganism)
  organism?: SubstanceSourceMaterialOrganism;

  /**
   * The unique identifier associated with the source material parent organism shall be specified.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  organismId?: Identifier;

  /**
   * The organism accepted Scientific name shall be provided based on the organism taxonomy.
   */
  @IsOptional()
  @IsString()
  organismName?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _organismName?: Element;

  /**
   * The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Gi
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  parentSubstanceId?: Identifier[];

  /**
   * The parent substance of the Herbal Drug, or Herbal preparation.
   */
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  parentSubstanceName?: string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Element)
  _parentSubstanceName?: Element[];

  /**
   * To do.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSourceMaterialPartDescription)
  partDescription?: SubstanceSourceMaterialPartDescription[];

  /**
   * General high level classification of the source material specific to the origin of the material.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  sourceMaterialClass?: CodeableConcept;

  /**
   * The state of the source material when extracted.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  sourceMaterialState?: CodeableConcept;

  /**
   * The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  sourceMaterialType?: CodeableConcept;

  /**
   * Constructor for SubstanceSourceMaterial
   */
  constructor(source: Partial<SubstanceSourceMaterial> = {}) {
    super(source);
    this.resourceType = 'SubstanceSourceMaterial';
  }
}
