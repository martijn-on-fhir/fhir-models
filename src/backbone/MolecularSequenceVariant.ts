import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { Reference } from '../elements/Reference';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MolecularSequenceVariant extends BackboneElement {
  /**
   * Extended CIGAR string for aligning the sequence with reference bases. See detailed documentation [here](http://support.i
   */
  @IsOptional()
  @IsString()
  cigar?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _cigar?: Element;

  /**
   * End position of the variant on the reference sequence. If the coordinate system is 0-based then end is exclusive and doe
   */
  @IsOptional()
  @IsNumber()
  end?: number;

  /**
   * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browse
   */
  @IsOptional()
  @IsString()
  observedAllele?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _observedAllele?: Element;

  /**
   * An allele is one of a set of coexisting sequence variants of a gene ([SO:0001023](http://www.sequenceontology.org/browse
   */
  @IsOptional()
  @IsString()
  referenceAllele?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _referenceAllele?: Element;

  /**
   * Start position of the variant on the  reference sequence. If the coordinate system is either 0-based or 1-based, then st
   */
  @IsOptional()
  @IsNumber()
  start?: number;

  /**
   * A pointer to an Observation containing variant information.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Reference)
  variantPointer?: Reference;

  /**
   * Constructor for MolecularSequenceVariant
   */
  constructor(source: Partial<MolecularSequenceVariant> = {}) {
    super(source);
  }
}
