import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Reference } from './Reference';

/**
 * The populations that make up the population group, one for each type of population appropriate for the measure.
 */
export interface MeasureReportGroupPopulation extends BackboneElement {

  /**
   * The type of the population.
   */
  code?: CodeableConcept | undefined;
  /**
   * The number of members of the population.
   */
  count?: number | undefined;
  /**
   * This element refers to a List of subject level MeasureReport resources, one for each subject in this population.
   */
  subjectResults?: Reference | undefined;

}