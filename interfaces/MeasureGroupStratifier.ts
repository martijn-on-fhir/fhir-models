import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Expression } from './Expression';
import { MeasureGroupStratifierComponent } from './MeasureGroupStratifierComponent';

/**
 * The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library or a valid FHIR Resource Path.
 */
export interface MeasureGroupStratifier extends BackboneElement {

  /**
   * Indicates a meaning for the stratifier. This can be as simple as a unique identifier, or it can establish meaning in a broader context by drawing from a terminology, allowing stratifiers to be correlated across measures.
   */
  code?: CodeableConcept | undefined;
  /**
   * Stratifiers are defined either as a single criteria, or as a set of component criteria.
   */
  component?: MeasureGroupStratifierComponent[] | undefined;
  /**
   * An expression that specifies the criteria for the stratifier. This is typically the name of an expression defined within a referenced library, but it may also be a path to a stratifier element.
   */
  criteria?: Expression | undefined;
  /**
   * The human readable description of this stratifier criteria.
   */
  description?: string | undefined;
  _description?: Element | undefined;

}