import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Expression } from './Expression';

/**
 * Stratifiers are defined either as a single criteria, or as a set of component criteria.
 */
export interface MeasureGroupStratifierComponent extends BackboneElement {

  /**
   * Indicates a meaning for the stratifier component. This can be as simple as a unique identifier, or it can establish meaning in a broader context by drawing from a terminology, allowing stratifiers to be correlated across measures.
   */
  code?: CodeableConcept | undefined;
  /**
   * An expression that specifies the criteria for this component of the stratifier. This is typically the name of an expression defined within a referenced library, but it may also be a path to a stratifier element.
   */
  criteria: Expression;
  /**
   * The human readable description of this stratifier criteria component.
   */
  description?: string | undefined;
  _description?: Element | undefined;

}