import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';

/**
 * A stratifier component value.
 */
export interface MeasureReportGroupStratifierStratumComponent extends BackboneElement {

  /**
   * The code for the stratum component value.
   */
  code: CodeableConcept;
  /**
   * The stratum component value.
   */
  value: CodeableConcept;

}