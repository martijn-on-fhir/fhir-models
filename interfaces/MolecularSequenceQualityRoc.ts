import { BackboneElement } from './BackboneElement';

/**
 * Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff.
 */
export interface MolecularSequenceQualityRoc extends BackboneElement {

  /**
   * Calculated fScore if the GQ score threshold was set to "score" field value.
   */
  fMeasure?: number[] | undefined;
  /**
   * The number of false negatives if the GQ score threshold was set to "score" field value.
   */
  numFN?: number[] | undefined;
  /**
   * The number of false positives if the GQ score threshold was set to "score" field value.
   */
  numFP?: number[] | undefined;
  /**
   * The number of true positives if the GQ score threshold was set to "score" field value.
   */
  numTP?: number[] | undefined;
  /**
   * Calculated precision if the GQ score threshold was set to "score" field value.
   */
  precision?: number[] | undefined;
  /**
   * Invidual data point representing the GQ (genotype quality) score threshold.
   */
  score?: number[] | undefined;
  /**
   * Calculated sensitivity if the GQ score threshold was set to "score" field value.
   */
  sensitivity?: number[] | undefined;

}