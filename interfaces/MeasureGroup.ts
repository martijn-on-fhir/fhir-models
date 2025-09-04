import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { MeasureGroupPopulation } from './MeasureGroupPopulation';
import { MeasureGroupStratifier } from './MeasureGroupStratifier';

/**
 * A group of population criteria for the measure.
 */
export interface MeasureGroup extends BackboneElement {

  /**
   * Indicates a meaning for the group. This can be as simple as a unique identifier, or it can establish meaning in a broader context by drawing from a terminology, allowing groups to be correlated across measures.
   */
  code?: CodeableConcept | undefined;
  /**
   * The human readable description of this population group.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * A population criteria for the measure.
   */
  population?: MeasureGroupPopulation[] | undefined;
  /**
   * The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library or a valid FHIR Resource Path.
   */
  stratifier?: MeasureGroupStratifier[] | undefined;

}