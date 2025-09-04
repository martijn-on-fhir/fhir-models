import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MolecularSequenceReferenceSeq extends BackboneElement {
  /**
   * Structural unit composed of a nucleic acid molecule which controls its own replication through the interaction of specif
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  chromosome?: CodeableConcept;

  /**
   * The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37'.  Version number must be included if a
   */
  @IsOptional()
  @IsString()
  genomeBuild?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _genomeBuild?: Element;

  /**
   * A relative reference to a DNA strand based on gene orientation. The strand that contains the open reading frame of the g
   */
  @IsOptional()
  @IsIn(['sense', 'antisense'])
  orientation?: ('sense'|'antisense');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _orientation?: Element;

  /**
   * Reference identifier of reference sequence submitted to NCBI. It must match the type in the MolecularSequence.type field
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  referenceSeqId?: CodeableConcept;

  /**
   * A pointer to another MolecularSequence entity as reference sequence.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  referenceSeqPointer?: Reference;

  /**
   * A string like "ACGT".
   */
  @IsOptional()
  @IsString()
  referenceSeqString?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _referenceSeqString?: Element;

  /**
   * An absolute reference to a strand. The Watson strand is the strand whose 5'-end is on the short arm of the chromosome, a
   */
  @IsOptional()
  @IsIn(['watson', 'crick'])
  strand?: ('watson'|'crick');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _strand?: Element;

  /**
   * End position of the window on the reference sequence. If the coordinate system is 0-based then end is exclusive and does
   */
  @IsOptional()
  @IsNumber()
  windowEnd?: number;

  /**
   * Start position of the window on the reference sequence. If the coordinate system is either 0-based or 1-based, then star
   */
  @IsOptional()
  @IsNumber()
  windowStart?: number;

  /**
   * Constructor for MolecularSequenceReferenceSeq
   */
  constructor(source: Partial<MolecularSequenceReferenceSeq> = {}) {
    super(source);
  }
}
