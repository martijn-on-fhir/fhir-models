import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { MolecularSequenceQualityRoc } from './MolecularSequenceQualityRoc';
import { Quantity } from './Quantity';

/**
 * An experimental feature attribute that defines the quality of the feature in a quantitative way, such as a phred quality score ([SO:0001686](http://www.sequenceontology.org/browser/current_svn/term/SO:0001686)).
 */
export interface MolecularSequenceQuality extends BackboneElement {

  /**
   * End position of the sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position.
   */
  end?: number | undefined;
  /**
   * Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall).
   */
  fScore?: number | undefined;
  /**
   * The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar).
   */
  gtFP?: number | undefined;
  /**
   * Which method is used to get sequence quality.
   */
  method?: CodeableConcept | undefined;
  /**
   * QUERY.TP / (QUERY.TP + QUERY.FP).
   */
  precision?: number | undefined;
  /**
   * False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here.
   */
  queryFP?: number | undefined;
  /**
   * True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
   */
  queryTP?: number | undefined;
  /**
   * TRUTH.TP / (TRUTH.TP + TRUTH.FN).
   */
  recall?: number | undefined;
  /**
   * Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
   */
  roc?: MolecularSequenceQualityRoc | undefined;
  /**
   * The score of an experimentally derived feature such as a p-value ([SO:0001685](http://www.sequenceontology.org/browser/current_svn/term/SO:0001685)).
   */
  score?: Quantity | undefined;
  /**
   * Gold standard sequence used for comparing against.
   */
  standardSequence?: CodeableConcept | undefined;
  /**
   * Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive.
   */
  start?: number | undefined;
  /**
   * False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here.
   */
  truthFN?: number | undefined;
  /**
   * True positives, from the perspective of the truth data, i.e. the number of sites in the Truth Call Set for which there are paths through the Query Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event.
   */
  truthTP?: number | undefined;
  /**
   * INDEL / SNP / Undefined variant.
   */
  type: ('indel'|'snp'|'unknown');
  _type?: Element | undefined;

}