import 'reflect-metadata';
import { IsOptional, IsString, IsBoolean, IsNumber, IsArray, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { BackboneElement } from '../base/BackboneElement';
import { CodeableConcept } from '../elements/CodeableConcept';
import { MolecularSequenceQualityRoc } from './MolecularSequenceQualityRoc';
import { Quantity } from '../elements/Quantity';
import * as fhir from '../r4';

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresse
 */
export class MolecularSequenceQuality extends BackboneElement implements fhir.MolecularSequenceQuality {
  /**
   * End position of the sequence. If the coordinate system is 0-based then end is exclusive and does not include the last po
   */
  @IsOptional()
  @IsNumber()
  end?: number;

  /**
   * Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall).
   */
  @IsOptional()
  @IsNumber()
  fScore?: number;

  /**
   * The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the tru
   */
  @IsOptional()
  @IsNumber()
  gtFP?: number;

  /**
   * Which method is used to get sequence quality.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  method?: CodeableConcept;

  /**
   * QUERY.TP / (QUERY.TP + QUERY.FP).
   */
  @IsOptional()
  @IsNumber()
  precision?: number;

  /**
   * False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set th
   */
  @IsOptional()
  @IsNumber()
  queryFP?: number;

  /**
   * True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there a
   */
  @IsOptional()
  @IsNumber()
  queryTP?: number;

  /**
   * TRUTH.TP / (TRUTH.TP + TRUTH.FN).
   */
  @IsOptional()
  @IsNumber()
  recall?: number;

  /**
   * Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => MolecularSequenceQualityRoc)
  roc?: MolecularSequenceQualityRoc;

  /**
   * The score of an experimentally derived feature such as a p-value ([SO:0001685](http://www.sequenceontology.org/browser/c
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => Quantity)
  score?: Quantity;

  /**
   * Gold standard sequence used for comparing against.
   */
  @IsOptional()
  @ValidateNested()
  @Type(() => CodeableConcept)
  standardSequence?: CodeableConcept;

  /**
   * Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
   */
  @IsOptional()
  @IsNumber()
  start?: number;

  /**
   * False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set th
   */
  @IsOptional()
  @IsNumber()
  truthFN?: number;

  /**
   * True positives, from the perspective of the truth data, i.e. the number of sites in the Truth Call Set for which there a
   */
  @IsOptional()
  @IsNumber()
  truthTP?: number;

  /**
   * INDEL / SNP / Undefined variant.
   */
  @IsOptional()
  @IsIn(['indel', 'snp', 'unknown'])
  type?: ('indel'|'snp'|'unknown');

  @IsOptional()
  @ValidateNested()
  @Type(() => Element)
  _type?: Element;

  /**
   * Constructor for MolecularSequenceQuality
   */
  constructor(source: Partial<MolecularSequenceQuality> = {}) {
    super(source);
  }
}
