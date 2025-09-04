import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Expression } from './Expression';

/**
 * A population criteria for the measure.
 */
export interface MeasureGroupPopulation extends BackboneElement {

  /**
   * The type of population criteria.
   */
  code?: CodeableConcept | undefined;
  /**
   * In the case of a continuous-variable or ratio measure, this may be the name of a function that calculates the value of the individual observation for each patient or event in the population. For these types of measures, individual observations are reported as observation resources included in the evaluatedResources bundle for each patient. See the MeasureReport resource or the Quality Reporting topic for more information.
   */
  criteria: Expression;
  /**
   * The human readable description of this population criteria.
   */
  description?: string | undefined;
  _description?: Element | undefined;

}