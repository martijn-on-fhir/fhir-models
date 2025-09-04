import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { MeasureReportGroupPopulation } from './MeasureReportGroupPopulation';
import { MeasureReportGroupStratifier } from './MeasureReportGroupStratifier';
import { Quantity } from './Quantity';

/**
 * The results of the calculation, one for each population group in the measure.
 */
export interface MeasureReportGroup extends BackboneElement {

  /**
   * The meaning of the population group as defined in the measure definition.
   */
  code?: CodeableConcept | undefined;
  /**
   * The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group.
   */
  measureScore?: Quantity | undefined;
  /**
   * The populations that make up the population group, one for each type of population appropriate for the measure.
   */
  population?: MeasureReportGroupPopulation[] | undefined;
  /**
   * When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure.
   */
  stratifier?: MeasureReportGroupStratifier[] | undefined;

}