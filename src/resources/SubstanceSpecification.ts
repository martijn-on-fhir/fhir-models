import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Identifier } from '../elements/Identifier';
import { Reference } from '../elements/Reference';
import { SubstanceSpecificationCode } from '../backbone/SubstanceSpecificationCode';
import { SubstanceSpecificationMoiety } from '../backbone/SubstanceSpecificationMoiety';
import { SubstanceSpecificationName } from '../backbone/SubstanceSpecificationName';
import { SubstanceSpecificationProperty } from '../backbone/SubstanceSpecificationProperty';
import { SubstanceSpecificationRelationship } from '../backbone/SubstanceSpecificationRelationship';
import { SubstanceSpecificationStructure } from '../backbone/SubstanceSpecificationStructure';
import { SubstanceSpecificationStructureIsotopeMolecularWeight } from '../backbone/SubstanceSpecificationStructureIsotopeMolecularWeight';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceSpecification extends DomainResource implements fhir.SubstanceSpecification {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'SubstanceSpecification' as const;

  /**
   * Codes associated with the substance.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationCode)
  code?: SubstanceSpecificationCode[];

  /**
   * Textual comment about this record of a substance.
   */
  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _comment?: Element;

  /**
   * Textual description of the substance.
   */
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _description?: Element;

  /**
   * If the substance applies to only human or veterinary use.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  domain?: CodeableConcept;

  /**
   * Identifier by which this substance is known.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Identifier)
  identifier?: Identifier;

  /**
   * Moiety, for structural modifications.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationMoiety)
  moiety?: SubstanceSpecificationMoiety[];

  /**
   * The molecular weight or weight range (for proteins, polymers or nucleic acids).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationStructureIsotopeMolecularWeight)
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight[];

  /**
   * Names applicable to this substance.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationName)
  name?: SubstanceSpecificationName[];

  /**
   * Data items specific to nucleic acids.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  nucleicAcid?: Reference;

  /**
   * Data items specific to polymers.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  polymer?: Reference;

  /**
   * General specifications for this substance, including how it is related to other substances.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationProperty)
  property?: SubstanceSpecificationProperty[];

  /**
   * Data items specific to proteins.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  protein?: Reference;

  /**
   * General information detailing this substance.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  referenceInformation?: Reference;

  /**
   * A link between this substance and another, with details of the relationship.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceSpecificationRelationship)
  relationship?: SubstanceSpecificationRelationship[];

  /**
   * Supporting literature.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  source?: Reference[];

  /**
   * Material or taxonomic/anatomical source for the substance.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  sourceMaterial?: Reference;

  /**
   * Status of substance within the catalogue e.g. approved.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  status?: CodeableConcept;

  /**
   * Structural information.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => SubstanceSpecificationStructure)
  structure?: SubstanceSpecificationStructure;

  /**
   * High level categorization, e.g. polymer or nucleic acid.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  type?: CodeableConcept;

  /**
   * Constructor for SubstanceSpecification
   */
  constructor(source: Partial<SubstanceSpecification> = {}) {
    super(source);
    this.resourceType = 'SubstanceSpecification';
  }
}
