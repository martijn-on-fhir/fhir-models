import { BackboneElement } from './BackboneElement';
import { CodeableConcept } from './CodeableConcept';
import { Element } from './Element';
import { Expression } from './Expression';

/**
 * Note that supplemental data are reported as observations for each patient and included in the evaluatedResources bundle. See the MeasureReport resource or the Quality Reporting topic for more information.
 */
export interface MeasureSupplementalData extends BackboneElement {

  /**
   * Indicates a meaning for the supplemental data. This can be as simple as a unique identifier, or it can establish meaning in a broader context by drawing from a terminology, allowing supplemental data to be correlated across measures.
   */
  code?: CodeableConcept | undefined;
  /**
   * The criteria for the supplemental data. This is typically the name of a valid expression defined within a referenced library, but it may also be a path to a specific data element. The criteria defines the data to be returned for this element.
   */
  criteria: Expression;
  /**
   * The human readable description of this supplemental data.
   */
  description?: string | undefined;
  _description?: Element | undefined;
  /**
   * An indicator of the intended usage for the supplemental data element. Supplemental data indicates the data is additional information requested to augment the measure information. Risk adjustment factor indicates the data is additional information used to calculate risk adjustment factors when applying a risk model to the measure calculation.
   */
  usage?: CodeableConcept[] | undefined;

}