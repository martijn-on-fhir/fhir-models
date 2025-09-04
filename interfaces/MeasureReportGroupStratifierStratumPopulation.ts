import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * The populations that make up the stratum, one for each type of population appropriate to the measure.
 */
export interface MeasureReportGroupStratifierStratumPopulation extends BackboneElement {

  /**
   * The type of the population.
   */
  code?: CodeableConcept | undefined;
  /**
   * The number of members of the population in this stratum.
   */
  count?: number | undefined;
  /**
   * This element refers to a List of subject level MeasureReport resources, one for each subject in this population in this stratum.
   */
  subjectResults?: Reference | undefined;

}