import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { MeasureReportGroupStratifierStratumComponent } from './MeasureReportGroupStratifierStratumComponent';
import { MeasureReportGroupStratifierStratumPopulation } from './MeasureReportGroupStratifierStratumPopulation';
import { Quantity } from './Quantity';

/**
 * This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value.
 */
export interface MeasureReportGroupStratifierStratum extends BackboneElement {

  /**
   * A stratifier component value.
   */
  component?: MeasureReportGroupStratifierStratumComponent[] | undefined;
  /**
   * The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum.
   */
  measureScore?: Quantity | undefined;
  /**
   * The populations that make up the stratum, one for each type of population appropriate to the measure.
   */
  population?: MeasureReportGroupStratifierStratumPopulation[] | undefined;
  /**
   * The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique.
   */
  value?: CodeableConcept | undefined;

}