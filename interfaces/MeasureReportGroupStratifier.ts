import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { MeasureReportGroupStratifierStratum } from './MeasureReportGroupStratifierStratum';

/**
 * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
 */
export interface MeasureReportGroupStratifier extends BackboneElement {

  /**
   * The meaning of this stratifier, as defined in the measure definition.
   */
  code?: CodeableConcept[] | undefined;
  /**
   * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
   */
  stratum?: MeasureReportGroupStratifierStratum[] | undefined;

}