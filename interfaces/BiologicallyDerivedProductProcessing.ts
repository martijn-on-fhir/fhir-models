import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Period } from './Period';
import { Reference } from './Reference';

/**
 * Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells.
 */
export interface BiologicallyDerivedProductProcessing extends BackboneElement {

  /**
   * Substance added during processing.
   */
  additive?: Reference | undefined;
  /**
   * Description of of processing.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * Procesing code.
   */
  procedure?: CodeableConcept | undefined;
  /**
   * Time of processing.
   */
  timeDateTime?: string | undefined;
  _timeDateTime?: Element | undefined;
  /**
   * Time of processing.
   */
  timePeriod?: Period | undefined;

}