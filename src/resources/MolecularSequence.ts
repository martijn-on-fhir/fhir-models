import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { DomainResource } from '../base/DomainResource';
import { Element } from '../base/Element';
import { Identifier } from '../elements/Identifier';
import { MolecularSequenceQuality } from '../backbone/MolecularSequenceQuality';
import { MolecularSequenceReferenceSeq } from '../backbone/MolecularSequenceReferenceSeq';
import { MolecularSequenceRepository } from '../backbone/MolecularSequenceRepository';
import { MolecularSequenceStructureVariant } from '../backbone/MolecularSequenceStructureVariant';
import { MolecularSequenceVariant } from '../backbone/MolecularSequenceVariant';
import { Quantity } from '../elements/Quantity';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MolecularSequence extends DomainResource {
  /**
   * Resource Type Name (for serialization)
   */
  readonly resourceType = 'MolecularSequence' as const;

  /**
   * Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or sta
   */
  @IsOptional()
  @IsNumber()
  coordinateSystem?: number;

  /**
   * The method for sequencing, for example, chip information.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  device?: Reference;

  /**
   * A unique identifier for this particular sequence instance. This is a FHIR-defined id.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Identifier)
  identifier?: Identifier[];

  /**
   * Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This sha
   */
  @IsOptional()
  @IsString()
  observedSeq?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _observedSeq?: Element;

  /**
   * The patient whose sequencing results are described by this resource.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  patient?: Reference;

  /**
   * The organization or lab that should be responsible for this result.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  performer?: Reference;

  /**
   * Pointer to next atomic sequence which at most contains one variant.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Reference)
  pointer?: Reference[];

  /**
   * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MolecularSequenceQuality)
  quality?: MolecularSequenceQuality[];

  /**
   * The number of copies of the sequence of interest. (RNASeq).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  quantity?: Quantity;

  /**
   * Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed seque
   */
  @IsOptional()
  @IsNumber()
  readCoverage?: number;

  /**
   * A sequence that is used as a reference to describe variants that are present in a sequence analyzed.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => MolecularSequenceReferenceSeq)
  referenceSeq?: MolecularSequenceReferenceSeq;

  /**
   * Configurations of the external repository. The repository shall store target's observedSeq or records related with targe
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MolecularSequenceRepository)
  repository?: MolecularSequenceRepository[];

  /**
   * Specimen used for sequencing.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  specimen?: Reference;

  /**
   * Information about chromosome structure variation.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MolecularSequenceStructureVariant)
  structureVariant?: MolecularSequenceStructureVariant[];

  /**
   * Amino Acid Sequence/ DNA Sequence / RNA Sequence.
   */
  @IsOptional()
  @IsIn(['aa', 'dna', 'rna'])
  type?: ('aa'|'dna'|'rna');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * The definition of variant here originates from Sequence ontology ([variant_of](http://www.sequenceontology.org/browser/c
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => MolecularSequenceVariant)
  variant?: MolecularSequenceVariant[];

  /**
   * Constructor for MolecularSequence
   */
  constructor(source: Partial<MolecularSequence> = {}) {
    super(source);
    this.resourceType = 'MolecularSequence';
  }
}
