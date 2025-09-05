import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Element } from '../base/Element';
import { Attachment } from '../elements/Attachment';
import { CodeableConcept } from '../elements/CodeableConcept';
import { SubstanceNucleicAcidSubunitLinkage } from './SubstanceNucleicAcidSubunitLinkage';
import { SubstanceNucleicAcidSubunitSugar } from './SubstanceNucleicAcidSubunitSugar';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class SubstanceNucleicAcidSubunit extends BackboneElement {
  /**
   * The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is rep
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  fivePrime?: CodeableConcept;

  /**
   * The length of the sequence shall be captured.
   */
  @IsOptional()
  @IsNumber()
  length?: number;

  /**
   * The linkages between sugar residues will also be captured.
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceNucleicAcidSubunitLinkage)
  linkage?: SubstanceNucleicAcidSubunitLinkage[];

  /**
   * Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequen
   */
  @IsOptional()
  @IsString()
  sequence?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _sequence?: Element;

  /**
   * (TBC).
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Attachment)
  sequenceAttachment?: Attachment;

  /**
   * Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered b
   */
  @IsOptional()
  @IsNumber()
  subunit?: number;

  /**
   * 5.3.6.8.1 Sugar ID (Mandatory).
   */
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SubstanceNucleicAcidSubunitSugar)
  sugar?: SubstanceNucleicAcidSubunitSugar[];

  /**
   * The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is rep
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  threePrime?: CodeableConcept;

  /**
   * Constructor for SubstanceNucleicAcidSubunit
   */
  constructor(source: Partial<SubstanceNucleicAcidSubunit> = {}) {
    super(source);
  }
}
